using UnityEngine;
using System.Collections;

public class sphereSpawn : MonoBehaviour 
{
	public GameObject sphere;
	public GameObject sphereSpawnPoint;
	// Use this for initialization
	void Start () 
	{
	
	}
	
	// Update is called once per frame
	void Update () 
	{
		if(Input.GetMouseButtonDown(0))
		{
			GameObject newsphere = Instantiate(this.sphere) as GameObject;
			newsphere.transform.position = sphereSpawnPoint.transform.position;
			newsphere.name = "sphere";
		}
	
	
	}






}
