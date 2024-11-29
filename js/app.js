const endDate = "30 November 2024 10:00 AM";

if (typeof document !== "undefined") {
  document.getElementById("end-date").innerText = endDate;
}

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if(diff<0) return;
  
  // Convert to days
  inputs[0].value = Math.floor(diff / 3600 / 24);//into days
  inputs[1].value=Math.floor(diff/3600)%24;//into hours
  inputs[2].value=Math.floor(diff/60)%60//into minutes
  inputs[3].value=Math.floor(diff)%60
}

// Initial call
clock();

/**
 * * 1 day=24 hrs;
 * 1 hr=60mins;
 * 60mins=3600sec;
 /** */

 setInterval(
    ()=>{
        clock()
    },
    1000
 )