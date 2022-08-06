//scroll animation function
window.addEventListener("scroll", (event) => {
  let scroll2=1
  scroll2=Math.round(((this.scrollY)/100));
  console.log(scroll2)
  if(scroll2 < 30)
  {
      document.getElementById('fire').src='Fire AE Project File Free-'+scroll2+'.jpg'
  }

});
