function IndexPage() {
  // show page
  $('main').empty().append(`
<div class="index__wrap content__width">
    <div class="index__stamp"/>
    <div class="index__name">
        Peter Dee
    </div>
    <div class="index__position">
        Lead Fullstack Software Developer
    </div>
    <div class="index__links">
        <div>
            <a href="/resume" id="showResume">Resume</a>
        </div>
        <div>
            <a href="https://github.com/peterorbb">Github</a>
        </div>
    </div>
</div>
  `);

  // open Resume page
  $('#showResume').on('click', (e) => {
    e.preventDefault();
    ResumePage();
  });
}
