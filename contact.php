<?php
	include_once'headersub.php';
?>
<content>
<div class="text">
<br>
<h2>Want to contact us?</h2> 
<p>You can email us at projectepsilon12@outlook.com or use the following form to send us a message.</p>
<div id="contactform">
<form> <!--action="contactform.php" method="post"-->
	First Name:<br>
	<input type="text" name="firstname">
	<br>
	Email:<br>
	<input type="text" name="email" id="email">
	<br>
	<br>
	<textarea cols="75" rows="6" name="message"></textarea>
	<br>
	<br>
	<input type="submit" value="Submit" id="formsubmit">
</form>	
</div>
</div>
</content>
<script type="text/javascript" src="updatejs.js"></script>
</body>
</html>
