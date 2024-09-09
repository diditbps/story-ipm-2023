function mySimulasi() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  var uhh = x.elements[0].value;
  var hls = x.elements[1].value;
  var rls = x.elements[2].value;
  var ppp = x.elements[3].value;
  // text = uhh+hls+rls+ppp;

  var indeks_kesehatan = (uhh-20)/(85-20);
  var indeks_hls = (hls-0)/(18-0);
  var indeks_rls = (rls-0)/(15-0);
  var indeks_pendidikan = (indeks_hls+indeks_rls)/2;
  var indeks_pengeluaran = (Math.log(ppp) - Math.log(1007.436))/(Math.log(26572.352046937) - Math.log(1007.436));
  var perkalian = indeks_kesehatan*indeks_pendidikan*indeks_pengeluaran;
  var ipm = Math.round(Math.cbrt(perkalian)*10000)/100;

  if(ipm<60){
    text ="Nilai IPM kamu adalah: "+ ipm+"<br>"+"Kategori Rendah";
  } else if(ipm>=60 && ipm<=69.99){
    text = "Nilai IPM kamu adalah: "+ ipm+"<br>"+"Kategori Sedang";
  } else if(ipm>=70 && ipm<=79.99){
    text = "Nilai IPM kamu adalah: "+ ipm+"<br>"+"Kategori Tinggi";
  } else if(ipm>=80){
    text = "Nilai IPM kamu adalah: "+ ipm+"<br>"+"Kategori Sangat Tinggi";
  }

  document.getElementById("demo").innerHTML = text;
}