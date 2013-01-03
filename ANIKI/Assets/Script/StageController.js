var numOfBlocks = 0;
var myTimer : float = 5.0;



function Awake () {
	var blocks: GameObject[] = GameObject.FindGameObjectsWithTag ("Block");
	numOfBlocks = blocks.length;

}

function OnGUI () {
	GUI.Label (Rect (0,0,100,60),"Blocls:" + numOfBlocks);
	
	if (numOfBlocks == 0){
		GUI.Label (Rect (Screen.width/2 -50,Screen.height/2,100,60),"STAGE CLEAR!!" );
	}
}

function BlockDidDestroy(block : GameObject){
	numOfBlocks--;
}



function Update () {
	if(myTimer > 0){
		myTimer -= Time.deltaTime;
	}

	if (numOfBlocks == 0){
	  // Here , turn into Next scene.
	  //  ...but i did not know What's to do
	}
 
	if(myTimer <= 0){
		Debug.Log("GAME OVER");
	  // Here , turn into GAME Over &Continue  scene.
	  //  ...but i did not know What's to do
	}

}