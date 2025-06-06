import random
import string
import smtplib
import os
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from email.mime.image import MIMEImage
from jinja2 import Environment,FileSystemLoader
from nexios.http.request import Request
from nexios.http import Response


def generate_user_password():
    return ''.join(random.choices(string.digits, k=6))


        
    




logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

class SMTPMailer:
    def __init__(self, smtp_server, smtp_port, smtp_user, smtp_pass, use_tls=True, use_ssl=False):
        """
        Initialize the SMTP mailer.
        :param smtp_server: str - SMTP server hostname
        :param smtp_port: int - SMTP server port
        :param smtp_user: str - SMTP username
        :param smtp_pass: str - SMTP password
        :param use_tls: bool - Use TLS encryption
        :param use_ssl: bool - Use SSL encryption
        """
        self.smtp_server = smtp_server
        self.smtp_port = smtp_port
        self.smtp_user = smtp_user
        self.smtp_pass = smtp_pass
        self.use_tls = use_tls
        self.use_ssl = use_ssl

    def send_email(self, to_emails, subject, body, is_html=False, attachments=None, inline_images=None, 
                   cc_emails=None, bcc_emails=None, reply_to=None, headers=None):
        """
        Send an email with optional HTML formatting, attachments, and inline images.

        :param to_emails: str or list - Recipient email(s)
        :param subject: str - Email subject
        :param body: str - Email content (plain text or HTML)
        :param is_html: bool - Whether the email body is HTML
        :param attachments: list - List of file paths to attach
        :param inline_images: dict - Inline images {cid: filepath}
        :param cc_emails: str or list - CC email addresses
        :param bcc_emails: str or list - BCC email addresses
        :param reply_to: str - Reply-to email
        :param headers: dict - Custom headers
        """
        if isinstance(to_emails, str):
            to_emails = [to_emails]
        if isinstance(cc_emails, str):
            cc_emails = [cc_emails]
        if isinstance(bcc_emails, str):
            bcc_emails = [bcc_emails]

        recipients = to_emails + (cc_emails or []) + (bcc_emails or [])
        
        msg = MIMEMultipart()
        msg["From"] = self.smtp_user
        msg["To"] = ", ".join(to_emails)
        msg["Subject"] = subject

        if cc_emails:
            msg["Cc"] = ", ".join(cc_emails)
        if reply_to:
            msg["Reply-To"] = reply_to
        if headers:
            for key, value in headers.items():
                msg[key] = value

        # Attach email body
        msg.attach(MIMEText(body, "html" if is_html else "plain"))

        # Attach inline images
        if inline_images:
            for cid, file_path in inline_images.items():
                if os.path.exists(file_path):
                    with open(file_path, "rb") as img_file:
                        img = MIMEImage(img_file.read())
                        img.add_header("Content-ID", f"<{cid}>")
                        img.add_header("Content-Disposition", "inline", filename=os.path.basename(file_path))
                        msg.attach(img)

        # Attach files
        if attachments:
            for file_path in attachments:
                if os.path.exists(file_path):
                    part = MIMEBase("application", "octet-stream")
                    with open(file_path, "rb") as attachment:
                        part.set_payload(attachment.read())
                    encoders.encode_base64(part)
                    part.add_header("Content-Disposition", f"attachment; filename={os.path.basename(file_path)}")
                    msg.attach(part)

        # Send email
        try:
            if self.use_ssl:
                server = smtplib.SMTP_SSL(self.smtp_server, self.smtp_port)
            else:
                server = smtplib.SMTP(self.smtp_server, self.smtp_port)
                if self.use_tls:
                    server.starttls()

            server.login(self.smtp_user, self.smtp_pass)
            server.sendmail(self.smtp_user, recipients, msg.as_string())
            server.quit()
            logging.info("Email sent successfully!")
            return True
        except Exception as e:
            logging.error(f"Email sending failed: {e}")
            return False


smtp_config = {
    "server": "smtp.gmail.com",
    "port": 587,
    "security": "TLS",
    "username": "ogidiunionadvancementforum1@gmail.com",
    "password": "qsihpspsozixlvcx"
}
mailer = SMTPMailer(smtp_server=smtp_config["server"],
                    smtp_port=smtp_config["port"],
                    smtp_pass=smtp_config["password"],
                    use_tls=True,
                    smtp_user=smtp_config["username"],
                    

                    )








TEMPLATES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "templates")
jinja2_env = Environment(
    loader=FileSystemLoader(TEMPLATES_DIR)
)

async def send_user_email(req, res):
    email = req.state.email
    password = req.state.password
    first_name = req.state.first_name
    last_name = req.state.last_name
    
    if email:
        print("Email sent to", email)
        print("Pasword",password)
        retries = 3
        template =jinja2_env.get_template("newUserMail.html")
        
        mail = mailer.send_email(email, "Ogidi Union", template.render(password = password,email = email, first_name = first_name, last_name = last_name),is_html=True)
        if not mail and retries > 0:
            mail = mailer.send_email(email, "Ogidi Union", template.render(password = password,email = email, first_name = first_name, last_name = last_name),is_html=True)

            retries -=1 
    


        
    
    