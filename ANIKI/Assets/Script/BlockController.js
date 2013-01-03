function OnCollisionEnter(collision : Collision){
	var stageController : StageController = 
		GameObject.Find("StageManager").GetComponent("StageController");
	stageController.BlockDidDestroy(gameObject);

	GameObject.Destroy(gameObject);
}