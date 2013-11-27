#pragma strict

enum RotationAxes{ MouseXAndY, MouseX, MouseY }
var axes = RotationAxes.MouseXAndY;
var sensitivityX : float = 15;
var sensitivityY : float = 15;

var minimumY : float = -60;
var maximumY : float = 60;

private var rotationY : float = 0;

function Update (){
	if (axes == RotationAxes.MouseXAndY){
		var rotationX : float = transform.localEulerAngles.y + Input.GetAxis("Mouse X") * sensitivityX;
			
		rotationY += Input.GetAxis("Mouse Y") * sensitivityY;
		rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
			
		transform.localEulerAngles = new Vector3(-rotationY, rotationX, 0);
	}
	else if (axes == RotationAxes.MouseX){
		transform.Rotate(0, Input.GetAxis("Mouse X") * sensitivityX, 0);
	}else{
		rotationY += Input.GetAxis("Mouse Y") * sensitivityY;
		rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
	
		transform.localEulerAngles = new Vector3(-rotationY, transform.localEulerAngles.y, 0);
	}
}

