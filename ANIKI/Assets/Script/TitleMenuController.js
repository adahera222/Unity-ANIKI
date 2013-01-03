#pragma strict

function Start () {

}

function OnGUI(){
	GUI.Label (Rect (Screen.width/2 -50,Screen.height/2,100,60), "Can you Save ANIKIES ?");
	if (GUI.Button (Rect (Screen.width/2 -50,Screen.height/2 +50,100,25), " It's My Plesure !")){
//		print ("GAME START!!");
		 Application.LoadLevel("stage1");
	}
	
}
