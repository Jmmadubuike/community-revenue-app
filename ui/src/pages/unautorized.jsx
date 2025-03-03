import { FaShieldAlt, FaExclamationCircle, FaLock, FaArrowLeft } from "react-icons/fa"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Unauthorized Message */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                <FaShieldAlt className="h-16 w-16 text-red-200" />
              </div>
              <FaShieldAlt className="h-16 w-16 text-red-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Unauthorized Access</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            You don't have permission to access this page. Please contact an administrator if you believe this is an
            error.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Why am I seeing this page?</h2>
            <p className="text-gray-600 mb-6">Understanding access restrictions and how to resolve them</p>

            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start mb-6">
              <FaExclamationCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-amber-800">Access Denied</h3>
                <p className="text-amber-700 text-sm mt-1">
                  You're seeing this page because you don't have the required permissions to access the requested
                  resource.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Common reasons for this error:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Your account doesn't have the necessary permissions</li>
                  <li>Your session has expired and you need to log in again</li>
                  <li>You're trying to access a restricted area</li>
                  <li>There's a configuration issue with your account</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">What you can do:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Contact your system administrator</li>
                  <li>Try logging out and logging back in</li>
                  <li>Check if you're using the correct account</li>
                  <li>Return to the homepage and navigate to an accessible area</li>
                </ul>
              </div>

              <div className="flex justify-center mt-2">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200"
                >
                  <FaArrowLeft className="mr-2 h-4 w-4" />
                  Return to Previous Page
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <FaLock className="h-4 w-4 mr-2" />
              <span>If you believe this is an error, please contact the system administrator.</span>
            </div>
          </div>
        </div>

        {/* Contact Admin Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help? Contact the administrator at <span className="text-blue-600">admin@example.com</span>
          </p>
        </div>
      </div>
    </div>
  )
}

