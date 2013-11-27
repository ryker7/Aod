#pragma strict


var defaultSpeed = 0.21;
var runBobbingSpeed = 0.35;
var idleBobbingSpeed = 0.1;
var bobbingAmount = 0.1; 
var smooth : float = 1;
private var midpoint : Vector3; 
private var player : GameObject;
private var timer = 0.0; 
private var bobbingSpeed : float; 
private var motor : FPScontroller;
private var BobbingAmount : float;

function Awake (){
	//Find player and FPScontroller script
	player = GameObject.FindWithTag("Player");
	motor = player.GetComponent(FPScontroller);
	midpoint = transform.localPosition;

}
 
 function FixedUpdate () { 
 	if(motor.prone)
 		return;
    var waveslice = 0.0;  
    var waveslice2 = 0.0;
    var currentPosition : Vector3;
       waveslice = Mathf.Sin(timer*2); 
       waveslice2 = Mathf.Sin(timer);
       timer = timer + bobbingSpeed; 
       if (timer > Mathf.PI * 2) { 
          timer = timer - (Mathf.PI * 2); 
       } 
    if (waveslice != 0) { 
		var TranslateChange = waveslice * BobbingAmount; 
		var TranslateChange2 = waveslice2 * BobbingAmount;
		var TotalAxes = Mathf.Clamp (1.0, 0.0, 1.0); 
		var translateChange = TotalAxes * TranslateChange; 
		var translateChange2 = TotalAxes * TranslateChange2; 
		
		if(motor.grounded){
			//Player walk
			currentPosition.y = midpoint.y + translateChange;
			currentPosition.x = midpoint.x + translateChange2;
   		}
   		
    }else{
    	//Player not move
    	currentPosition = midpoint;
    } 
	//Walk/Run sway speed
	if (motor.Walking && !motor.Running) {
		bobbingSpeed = defaultSpeed;
		BobbingAmount = bobbingAmount;
	}else if(motor.Running) {
		bobbingSpeed = runBobbingSpeed;
		BobbingAmount = bobbingAmount;
	}
	
	if(!motor.Running && !motor.Walking){
		bobbingSpeed = idleBobbingSpeed;
		BobbingAmount = bobbingAmount*0.3;
		
	}
	transform.localPosition = Vector3.Lerp(transform.localPosition, currentPosition, Time.deltaTime * smooth);
 }
 
 @script AddComponentMenu ("FPS system/Camera Bob")