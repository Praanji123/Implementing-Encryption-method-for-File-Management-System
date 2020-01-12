<script>
var el = document.querySelector('input[name="tkcg_dob"]');
el.addEventListener('change', function() {
   if (!checkDOB(this.value)) {
	alert('DOB is invalid');
   }
   else {
	alert('DOB is valid');
   }
});
function checkDOB(dob)
{
   var dt = Date.parse(dob);
   if (isNaN(dt)) return false;
   
   var nw = new Date();
   return dt < nw.getTime();
}
</script>