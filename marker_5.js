//ar world
let world;

//marker
let marker01;
let marker02;
let marker03;
let marker04;
let marker05;


function setup(){
	world = new World('ARScene');
	marker01 = world.getMarker('furudonghai01');
	marker02 = world.getMarker('shoubinanshan02');
	marker03 = world.getMarker('anbangdingguo03');
	marker04 = world.getMarker('bingqingyujie04');
	marker05 = world.getMarker('fuxinggaozhao05');

	//gltf_furudonghai01福如东海
	let model_01 = new GLTF({
		asset: "model_01",
		x: -0.3,
		y: 0.5,
		z: 0,
		scaleX: 1,
		scaleY: 1,
		scaleZ: 1,

	});
	marker01.add(model_01);

	//gltf_shoubinanshan02寿比南山
	let model_02 = new GLTF({
		asset: "model_02",
		x: -0.3,
		y: 0.5,
		z: 0,
		scaleX: 1,
		scaleY: 1,
		scaleZ: 1,

	});
	marker02.add(model_02);

	//gltf_anbangdingguo03安邦定国
	let model_03 = new GLTF({
		asset: "model_03",
		x: -0.3,
		y: 0.5,
		z: 0,
		scaleX: 1,
		scaleY: 1,
		scaleZ: 1,

	});
	marker03.add(model_03);

//gltf_bingqingyujie04冰清玉洁
	let model_04 = new GLTF({
		asset: "model_04",
		x: -0.3,
		y: 0.5,
		z: 0,
		scaleX: 1,
		scaleY: 1,
		scaleZ: 1,

	});
	marker04.add(model_04);

//gltf_fuxinggaozhao05福星高照
	let model_05 = new GLTF({
		asset: "model_05",
		x: 0.09,
		y: 0,
		z: 0.6,
		scaleX: 1.3,
		scaleY: 1.3,
		scaleZ: 1.3,

	});
	marker05.add(model_05);				

	let target = model_05.tag.id;
	console.log(target);
	console.log(document.getElementById(target));
	document.getElementById(target).setAttribute("animation-mixer", "loop:repeat");

	//box
	let box = new Box({
		x: 0,
		y: 0.5,
		z: 0,
		opacity:0.5,
	});
	marker05.add(box);
}

function draw(){

}