document.addEventListener("adobe_dc_view_sdk.ready", function(){
    var adobeDCView = new AdobeDC.View({clientId: "2a2cd192381d4724add32fb82342bb05", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
    content:{ location:
        { url: "eva-pr-site.web.app/pdf/Ejemplo-Reporte-semanal.pdf"}},
    metaData:{fileName: "Ejemplo-Reporte-semanal.pdf"}
    },
    {
    embedMode: "SIZED_CONTAINER"
    });
});