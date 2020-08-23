$('button.btn[type="button"]').on('click', function (event) {
    // console.log()
    const place = $(this).attr("data-attribute-location")
    const payload = JSON.parse(place)
    console.log(payload.humid)
    const modalDiv = $("<div>").addClass("modal fade").attr({ id: "exampleModal", tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" })
    modalDiv.html(`
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close modalExampleClose" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ${place}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary modalExampleClose" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
    `)
    $("body").append(modalDiv)
    $("#exampleModal").modal()
})
$(document).on('hidden.bs.modal', function (e) {
    $("#exampleModal").remove()
})
// $(document).on("click", ".modalExampleClose", function(){
//     $("#exampleModal").remove()
// })
/*
<div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

*/