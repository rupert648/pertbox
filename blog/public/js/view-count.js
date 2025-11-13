function getUrl() {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return "http://localhost:3002";
  } else {
    return "https://backend.pert.dev";
  }
}

async function countPageView() {
  // TODO: re-enable
  // const path = window.location.pathname;
  // try {
  //   const response = await fetch(
  //     `${getUrl()}/count/${encodeURIComponent(path)}`,
  //   );
  //   const data = await response.json();
  //
  //   const viewCountDiv = document.querySelector(".viewcount");
  //   if (viewCountDiv) {
  //     viewCountDiv.textContent = `${data.views} ${data.views === 1 ? "view" : "views"}`;
  //   }
  //
  //   console.log(`Page views: ${data.views}`);
  // } catch (error) {
  //   console.error("Error counting view:", error);
  //   const viewCountDiv = document.querySelector(".viewcount");
  //   if (viewCountDiv) {
  //     viewCountDiv.textContent = "-- views";
  //   }
  // }
}

countPageView();
