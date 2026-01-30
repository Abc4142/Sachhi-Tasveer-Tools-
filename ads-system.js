
<!-- ================= PRO MAX MONEY SYSTEM v4 ================= -->

<script>
(function(){
  // ===== CONFIG =====
  const AD_CONFIG = {
    admolo: true,
    adoperator: true
  };

  // ===== LOAD ADMolo ADS =====
  function loadAdmolo() {
    const admoloScript = document.createElement("script");
    admoloScript.src = "https://cdn.admolo.com/loader.js";
    admoloScript.async = true;
    document.head.appendChild(admoloScript);
  }

  // ===== LOAD ADOPERATOR ADS =====
  function loadAdOperator() {
    const adOpScript = document.createElement("script");
    adOpScript.src = "//wwr.giriudog.com/?tag=17496f7d";
    adOpScript.async = true;
    adOpScript.setAttribute("data-cfasync","false");
    document.head.appendChild(adOpScript);
  }

  // ===== AUTO INSERT ADS IN PAGE =====
  function insertAds() {
    const adHTML = `
      <div style="text-align:center;margin:15px 0;">
        <div class="admoloBanner" data-publisher="eyJpdiI6IlJRaE1LK0dCTHNGaVhPNmRaeTBDb3c9PSIsInZhbHVlIjoiNFQvL1hDeVYvNVUxeGpWQjNPMzVyQT09IiwibWFjIjoiYjhhOGJlMGI0NzNmOTM2Y2Y5MWYzY2U3YjAxZmM5YWRlZmNhMjNhNTY1MDRiZGIyZjg4MjRjZjAzZTRmNjg5YSIsInRhZyI6IiJ9" data-adsize="728x90"></div>
      </div>

      <div style="text-align:center;margin:15px 0;">
        <div class="admoloBanner" data-publisher="eyJpdiI6Imd6WGdhZUdsWk5zMEhQckJwVFR1UXc9PSIsInZhbHVlIjoiMysxNHRKaTRqM3VEM3ZmQnA2YmZGQT09IiwibWFjIjoiMDQ1NzEzNTY2YTg0MjYwNDgzNzFhNDk0Mzc5ZDMxYWFmYjQ0ZmM4YzNlMzdmYzQyODMyODA2ZTg3ZGI3MGI0MSIsInRhZyI6IiJ9" data-adsize="300x300"></div>
      </div>

      <div style="text-align:center;margin:15px 0;">
        <div class="admoloBanner" data-publisher="eyJpdiI6Ii9DcnhmWmF3V2xJNmxDbVpXMnBTd1E9PSIsInZhbHVlIjoiY2Y2UkxXNDd3LzV3czFqZnZmTE5BQT09IiwibWFjIjoiYTFlZjE5Nzk5NTVhNWEwOTM3MWZjYjNkN2UwMmNlZDdiYTVmYWMxMmZmOTU1Y2UwMTliMGNhYjQ3ZWRjMWUyMCIsInRhZyI6IiJ9" data-adsize="320x180"></div>
      </div>
    `;

    const targets = document.querySelectorAll("article, .content, .post, .tool, main, body");
    targets.forEach(el => {
      if(!el.dataset.adsLoaded){
        el.insertAdjacentHTML("beforeend", adHTML);
        el.dataset.adsLoaded = "true";
      }
    });
  }

  // ===== INIT SYSTEM =====
  document.addEventListener("DOMContentLoaded", function(){
    if(AD_CONFIG.admolo) loadAdmolo();
    if(AD_CONFIG.adoperator) loadAdOperator();
    setTimeout(insertAds, 2000);
  });

})();
</script>

<!-- ================= END PRO MAX MONEY SYSTEM v4 ================= -->
