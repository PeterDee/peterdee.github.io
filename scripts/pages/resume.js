function ResumePage() {
  // show page
  $('main').empty().append(`
<div class="index__wrap content__width">
    <div class="index__name">
        CONSTRUCTION IN PROGRESS...
    </div>
    <div class="index__position">
        <a id="showIndex" href="/index">Back</a>
    </div>
</div>
  `);

  // open Index page
  $('#showIndex').on('click', (e) => {
    e.preventDefault();
    IndexPage();
  });
}
