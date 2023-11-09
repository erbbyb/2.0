/* library: aframep5.js
   author: craig kapp
   v0.1: 11/13/2016
   v0.2: 11/7/2017
   v0.3: 11/22/2020
   v0.4: 11/20/2021
*/
var _release = 'v0.4';
var _releaseDate = '11/20/2021';



class Container3D {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'container';

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}


class OBJ {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'obj';

        // set asset id
        this.tag.setAttribute('obj-model', 'obj: #' + opts.asset + '; mtl: #' + opts.mtl);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }
}


class GLTF {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'gltf';

        // set asset id
        this.tag.setAttribute('gltf-model', '#' + opts.asset);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }
}



class Box {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'box';

        // setup geometry parameters
        if (!('width' in opts)) {
            opts.width = 1;
        }
        if (!('depth' in opts)) {
            opts.depth = 1;
        }
        if (!('height' in opts)) {
            opts.height = 1;
        }
        this.width = opts.width;
        this.height = opts.height;
        this.depth = opts.depth;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }
}


class Plane {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'plane';

        // setup geometry parameters
        if (!('width' in opts)) {
            opts.width = 1;
        }
        if (!('height' in opts)) {
            opts.height = 1;
        }
        this.width = opts.width;
        this.height = opts.height;
        this.depth = "none";

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}


class Text {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'text';

        // setup geometry parameters
        if (!('width' in opts)) {
            opts.width = 1;
        }
        if (!('height' in opts)) {
            opts.height = 1;
        }
        this.width = opts.width;
        this.height = opts.height;
        this.depth = "none";

        // set text specific settings
        AFrameP5Utils.setTextOptions(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}



class Sphere {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'sphere';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        if (!('segmentsWidth' in opts)) {
            opts.segmentsWidth = 18;
        }
        this.segmentsWidth = opts.segmentsWidth;

        if (!('segmentsHeight' in opts)) {
            opts.segmentsHeight = 36;
        }
        this.segmentsHeight = opts.segmentsHeight;

        if (!('phiStart' in opts)) {
            opts.phiStart = 0;
        }
        this.phiStart = opts.phiStart;

        if (!('phiLength' in opts)) {
            opts.phiLength = 360;
        }
        this.phiLength = opts.phiLength;

        if (!('thetaStart' in opts)) {
            opts.thetaStart = 0;
        }
        this.thetaStart = opts.thetaStart;

        if (!('thetaLength' in opts)) {
            opts.thetaLength = 360;
        }
        this.thetaLength = opts.thetaLength;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}



class Sky {

    constructor(opts) {

        // store desired options
        if (opts == undefined) {
            opts = {};
        }
        this.opts = opts;

        // create a tag for this entity
        this.tag = document.createElement('a-sky');
        this.tag.id = 'id-' + Math.random().toString(36).substr(2, 16);
        this.id = this.tag.id;

        // store what kind of primitive shape this entity is
        this.prim = 'sky';

        // setup geometry parameters
        if (!('radius' in this.opts)) {
            this.opts.radius = 500;
        }
        this.radius = this.opts.radius;

        // setup material parameters
        if (!('asset' in this.opts)) {
            this.opts.asset = '';
        }
        this.asset = this.opts.asset;

        // dynamic textures
        if ('dynamicTexture' in opts && opts.dynamicTexture == true) {
            this.dynamicTexture = this.opts.dynamicTexture;

            if ('dynamicTextureWidth' in opts) {
                this.dynamicTextureWidth = opts.dynamicTextureWidth;
            } else {
                this.dynamicTextureWidth = 0;
            }

            if ('dynamicTextureWidth' in opts) {
                this.dynamicTextureHeight = opts.dynamicTextureHeight;
            } else {
                this.dynamicTextureHeight = 0;
            }

            AFrameP5Utils.registerDynamicTexture(this);
        } else {
            this.dynamicTexture = false;
        }

        // setup getters & setters
        this.getRadius = function() {
            if ('radius' in this) {
                return this.radius;
            }
            return 'none';
        }

        this.setRadius = function(r) {
            if ('radius' in this) {
                this.radius = r;
                AFrameP5Utils.processSkyChanges(this);
            }
        }

        this.changeRadius = function(r) {
            if ('radius' in this) {
                this.radius += r;
                AFrameP5Utils.processSkyChanges(this);
            }
        }

        this.getAsset = function() {
            if ('asset' in this) {
                return this.asset;
            }
            return "none";
        }
        this.setAsset = function(v) {
            if ('asset' in this) {
                this.asset = v;
                AFrameP5Utils.processSkyChanges(this);
            }
        }

        // update texture (for canvas textures)
        this.updateTexture = function() {
            try {
                this.tag.object3DMap.mesh.material.map.needsUpdate = true;
            } catch (e) {}
        }

        // setup tag with initial values
        AFrameP5Utils.processSkyChanges(this);
    }

}



class Dodecahedron {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'dodecahedron';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}



class Octahedron {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'octahedron';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}


class Tetrahedron {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'tetrahedron';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}


class Circle {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'circle';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        if (!('segments' in opts)) {
            opts.segments = 32;
        }
        this.segments = opts.segments;

        if (!('thetaStart' in opts)) {
            opts.thetaStart = 0;
        }
        this.thetaStart = opts.thetaStart;

        if (!('thetaLength' in opts)) {
            opts.thetaLength = 360;
        }
        this.thetaLength = opts.thetaLength;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}

class Cone {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'cone';

        // setup geometry parameters
        if (!('height' in opts)) {
            opts.height = 2;
        }
        this.height = opts.height;

        if (!('openEnded' in opts)) {
            opts.openEnded = false;
        }
        this.openEnded = opts.openEnded;

        if (!('radiusBottom' in opts)) {
            opts.radiusBottom = 1;
        }
        this.radiusBottom = opts.radiusBottom;

        if (!('radiusTop' in opts)) {
            opts.radiusTop = 1;
        }
        this.radiusTop = opts.radiusTop;

        if (!('segmentsRadial' in opts)) {
            opts.segmentsRadial = 36;
        }
        this.segmentsRadial = opts.segmentsRadial;

        if (!('segmentsHeight' in opts)) {
            opts.segmentsHeight = 18;
        }
        this.segmentsHeight = opts.segmentsHeight;

        if (!('thetaStart' in opts)) {
            opts.thetaStart = 0;
        }
        this.thetaStart = opts.thetaStart;

        if (!('thetaLength' in opts)) {
            opts.thetaLength = 360;
        }
        this.thetaLength = opts.thetaLength;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}

class Cylinder {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'cylinder';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        if (!('height' in opts)) {
            opts.height = 2;
        }
        this.height = opts.height;

        if (!('segmentsRadial' in opts)) {
            opts.segmentsRadial = 36;
        }
        this.segmentsRadial = opts.segmentsRadial;

        if (!('segmentsHeight' in opts)) {
            opts.segmentsHeight = 18;
        }
        this.segmentsHeight = opts.segmentsHeight;

        if (!('openEnded' in opts)) {
            opts.openEnded = false;
        }
        this.openEnded = opts.openEnded;

        if (!('thetaStart' in opts)) {
            opts.thetaStart = 0;
        }
        this.thetaStart = opts.thetaStart;

        if (!('thetaLength' in opts)) {
            opts.thetaLength = 360;
        }
        this.thetaLength = opts.thetaLength;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}

class Ring {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'ring';

        // setup geometry parameters
        if (!('radiusInner' in opts)) {
            opts.radiusInner = 0.5;
        }
        this.radiusInner = opts.radiusInner;

        if (!('radiusOuter' in opts)) {
            opts.radiusOuter = 1;
        }
        this.radiusOuter = opts.radiusOuter;

        if (!('segmentsTheta' in opts)) {
            opts.segmentsTheta = 32;
        }
        this.segmentsTheta = opts.segmentsTheta;

        if (!('segmentsPhi' in opts)) {
            opts.segmentsPhi = 8;
        }
        this.segmentsPhi = opts.segmentsPhi;

        if (!('thetaStart' in opts)) {
            opts.thetaStart = 0;
        }
        this.thetaStart = opts.thetaStart;

        if (!('thetaLength' in opts)) {
            opts.thetaLength = 360;
        }
        this.thetaLength = opts.thetaLength;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}

class Torus {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'torus';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        if (!('radiusTubular' in opts)) {
            opts.radiusTubular = 0.2;
        }
        this.radiusTubular = opts.radiusTubular;

        if (!('segmentsRadial' in opts)) {
            opts.segmentsRadial = 36;
        }
        this.segmentsRadial = opts.segmentsRadial;

        if (!('segmentsTubular' in opts)) {
            opts.segmentsTubular = 32;
        }
        this.segmentsTubular = opts.segmentsTubular;

        if (!('arc' in opts)) {
            opts.arc = 360;
        }
        this.arc = opts.arc;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}

class TorusKnot {

    constructor(opts) {
        // store desired options
        AFrameP5Utils.setEntityOptions(opts, this);

        // store what kind of primitive shape this entity is
        this.prim = 'torusKnot';

        // setup geometry parameters
        if (!('radius' in opts)) {
            opts.radius = 1;
        }
        this.radius = opts.radius;

        if (!('radiusTubular' in opts)) {
            opts.radiusTubular = 0.2;
        }
        this.radiusTubular = opts.radiusTubular;

        if (!('segmentsRadial' in opts)) {
            opts.segmentsRadial = 36;
        }
        this.segmentsRadial = opts.segmentsRadial;

        if (!('segmentsTubular' in opts)) {
            opts.segmentsTubular = 32;
        }
        this.segmentsTubular = opts.segmentsTubular;

        if (!('p' in opts)) {
            opts.p = 2;
        }
        this.p = opts.p;

        if (!('q' in opts)) {
            opts.q = 3;
        }
        this.q = opts.q;

        // set geometry
        AFrameP5Utils.setGeometry(this);

        // set material
        AFrameP5Utils.processMaterial(this);
        AFrameP5Utils.setMaterial(this);

        // set scale
        AFrameP5Utils.setScale(this.opts, this);

        // set position
        AFrameP5Utils.setPosition(this.opts, this);

        // set rotation
        AFrameP5Utils.setRotation(this.opts, this);

        // set visibility
        AFrameP5Utils.setVisibility(this.opts, this);

        // set click handler
        AFrameP5Utils.setClickHandlers(this);

        // init common setters / getters
        AFrameP5Utils.initializerSettersAndGetters(this);
    }

}



// utility class to support the creation of new 3D objects
class AFrameP5Utils {

	// internal map of dynamic textures
    static entitiesUsingDynamicTextures = [];

	// controller state variables
    static controller_rightTriggerDown = false;
    static controller_rightGripDown = false;
    static controller_rightThumbstickDirection = false;
    static controller_rightThumbstickRawData = false;
    static controller_aButtonDown = false;
    static controller_bButtonDown = false;
    static controller_leftTriggerDown = false;
    static controller_leftGripDown = false;
    static controller_leftThumbstickDirection = false;
    static controller_leftThumbstickRawData = false;
    static controller_xButtonDown = false;
    static controller_yButtonDown = false;

    // camera state variables
    static camera_semaphore = false;
    static camera_positionWorld = new THREE.Vector3();
    static camera_rotation = new THREE.Vector3();
    static camera_positionLocal = new THREE.Euler();

    static processSkyChanges(entity) {
        entity.tag.setAttribute('radius', entity.radius);
        entity.tag.setAttribute('src', '#' + entity.asset)
    }


    static setTextOptions(entity) {

        if ('text' in entity.opts) {
            entity.text = entity.opts.text;
        } else {
            entity.text = '';
        }

        if ('red' in entity.opts) {
            entity.red = entity.opts.red;
        } else {
            entity.red = 128;
        }

        if ('green' in entity.opts) {
            entity.green = entity.opts.green;
        } else {
            entity.green = 128;
        }

        if ('blue' in entity.opts) {
            entity.blue = entity.opts.blue;
        } else {
            entity.blue = 128;
        }

        if ('textAlign' in entity.opts) {
            entity.textAlign = entity.opts.textAlign;
        } else {
            entity.textAlign = 'center';
        }

        if ('font' in entity.opts) {
            entity.font = entity.opts.font;
        } else {
            entity.font = 'roboto';
        }

        if ('side' in entity.opts) {
            entity.side = entity.opts.side;
        } else {
            entity.side = 'double';
        }

        if ('opacity' in entity.opts) {
            entity.opacity = entity.opts.opacity;
        } else {
            entity.opacity = 1.0;
        }



        entity.setText = function(t) {
            this.text = t;
            AFrameP5Utils.processTextChanges(this);
        }

        entity.setColor = function(r, g, b) {
            if ('red' in this && 'green' in this && 'blue' in this) {
                this.red = parseInt(r);
                this.green = parseInt(g);
                this.blue = parseInt(b);

                AFrameP5Utils.processTextChanges(this);
            }
        }

        entity.setRed = function(r) {
            if ('red' in this) {
                this.red = parseInt(r);
                AFrameP5Utils.processTextChanges(this);
            }
        }

        entity.setGreen = function(g) {
            if ('green' in this) {
                this.green = parseInt(g);
                AFrameP5Utils.processTextChanges(this);
            }
        }

        entity.setBlue = function(b) {
            if ('blue' in this) {
                this.blue = parseInt(b);
                AFrameP5Utils.processTextChanges(this);
            }
        }

        entity.getRed = function() {
            if ('red' in this) {
                return this.red;
            }
            return "none";
        }

        entity.getGreen = function() {
            if ('green' in this) {
                return this.green;
            }
            return "none";
        }

        entity.getBlue = function() {
            if ('blue' in this) {
                return this.blue;
            }
            return "none";
        }

        entity.getOpacity = function() {
            if ('opacity' in this) {
                return this.opacity;
            }
            return "none";
        }
        entity.setOpacity = function(v) {
            if ('opacity' in this) {
                this.opacity = v;
                AFrameP5Utils.processTextChanges(this);
            }
        }

        entity.getSide = function() {
            if ('side' in this) {
                return this.side;
            }
            return "none";
        }
        entity.setSide = function(v) {
            if ('side' in this) {
                this.side = v;
                AFrameP5Utils.processTextChanges(this);
            }
        }

        entity.getFont = function() {
            if ('font' in this) {
                return this.font;
            }
            return "none";
        }
        entity.setFont = function(v) {
            if ('font' in this) {
                this.font = v;
                AFrameP5Utils.processTextChanges(this);
            }
        }

        entity.setTextAlign = function(t) {
            this.textAlign = t;
            AFrameP5Utils.processTextChanges(this);
        }

        entity.getText = function() {
            return this.text;
        }

        entity.getTextAlign = function() {
            return this.textAlign;
        }

        AFrameP5Utils.processTextChanges(entity);
    }

    static processTextChanges(entity) {
        entity.tag.setAttribute('text', `value: ${entity.text}; color: rgb(${entity.red}, ${entity.green}, ${entity.blue}); align: ${entity.textAlign}; font: ${entity.font}; side: ${entity.side}; opacity: ${entity.opacity};`);
    }

    static setClickHandlers(entity) {
        if ('clickFunction' in entity.opts) {
            entity.clickFunction = entity.opts.clickFunction;
            entity.tag.eRef = entity;
            //entity.tag.setAttribute('generic-interaction-handler', '');
        }
        /*
        if ('upFunction' in entity.opts) {
            entity.upFunction = entity.opts.upFunction;
            entity.tag.eRef = entity;
            entity.tag.setAttribute('generic-interaction-handler', '');
        }
        if ('enterFunction' in entity.opts) {
            entity.enterFunction = entity.opts.enterFunction;
            entity.tag.eRef = entity;
            entity.tag.setAttribute('generic-interaction-handler', '');
        }
        if ('leaveFunction' in entity.opts) {
            entity.leaveFunction = entity.opts.leaveFunction;
            entity.tag.eRef = entity;
            entity.tag.setAttribute('generic-interaction-handler', '');
        }
        if ('overFunction' in entity.opts) {
            entity.overFunction = entity.opts.overFunction;
            entity.tag.eRef = entity;
            entity.tag.setAttribute('generic-interaction-handler', '');
        }
        */
    }


    static setEntityOptions(opts, entity) {
        // store desired options
        if (opts == undefined) {
            opts = {};
        }
        entity.opts = opts;

        // create a tag for this entity
        entity.tag = document.createElement('a-entity');
        entity.tag.id = 'id-' + Math.random().toString(36).substr(2, 16);
        entity.id = entity.tag.id;

        // setup a "children" array
        entity.children = [];
    }


    static setGeometry(entity) {
        if (entity.prim == 'sphere') {
            entity.tag.setAttribute('geometry', 'primitive: sphere; radius: ' + entity.radius + '; segmentsWidth: ' + entity.segmentsWidth + '; segmentsHeight: ' + entity.segmentsHeight + '; phiStart: ' + entity.phiStart + '; phiLength: ' + entity.phiLength + '; thetaStart: ' + entity.thetaStart + '; thetaLength: ' + entity.thetaLength);
        } else if (entity.prim == 'circle') {
            entity.tag.setAttribute('geometry', 'primitive: circle; radius: ' + entity.radius + '; segments: ' + entity.segments + '; thetaStart: ' + entity.thetaStart + '; thetaLength: ' + entity.thetaLength);
        } else if (entity.prim == 'ring') {
            entity.tag.setAttribute('geometry', 'primitive: ring; radiusInner: ' + entity.radiusInner + '; radiusOuter: ' + entity.radiusOuter + '; segmentsTheta: ' + entity.segmentsTheta + '; segmentsPhi: ' + entity.segmentsPhi + '; thetaStart: ' + entity.thetaStart + '; thetaLength: ' + entity.thetaLength);
        } else if (entity.prim == 'cone') {
            entity.tag.setAttribute('geometry', 'primitive: cone; height: ' + entity.height + '; openEnded: ' + entity.openEnded + '; radiusBottom: ' + entity.radiusBottom + '; radiusTop: ' + entity.radiusTop + '; segmentsRadial: ' + entity.segmentsRadial + '; segmentsHeight: ' + entity.segmentsHeight + '; thetaStart: ' + entity.thetaStart + '; thetaLength: ' + entity.thetaLength);
        } else if (entity.prim == 'torus') {
            entity.tag.setAttribute('geometry', 'primitive: torus; radius: ' + entity.radius + '; radiusTubular: ' + entity.radiusTubular + '; segmentsRadial: ' + entity.segmentsRadial + '; segmentsTubular: ' + entity.segmentsTubular + '; arc: ' + entity.arc);
        } else if (entity.prim == 'torusKnot') {
            entity.tag.setAttribute('geometry', 'primitive: torusKnot; radius: ' + entity.radius + '; radiusTubular: ' + entity.radiusTubular + '; segmentsRadial: ' + entity.segmentsRadial + '; segmentsTubular: ' + entity.segmentsTubular + '; p: ' + entity.p + '; q: ' + entity.q);
        } else if (entity.prim == 'cylinder') {
            entity.tag.setAttribute('geometry', 'primitive: cylinder; radius: ' + entity.radius + '; height: ' + entity.height + '; openEnded: ' + entity.openEnded + '; segmentsRadial: ' + entity.segmentsRadial + '; segmentsHeight: ' + entity.segmentsHeight + '; thetaStart: ' + entity.thetaStart + '; thetaLength: ' + entity.thetaLength);
        } else if (entity.prim == 'box') {
            entity.tag.setAttribute('geometry', 'primitive: box; depth: ' + entity.depth + '; height: ' + entity.height + '; width: ' + entity.width);
        } else if (entity.prim == 'plane') {
            entity.tag.setAttribute('geometry', 'primitive: plane; height: ' + entity.height + '; width: ' + entity.width);
        } else if (entity.prim == 'octahedron' || entity.prim == 'tetrahedron' || entity.prim == 'dodecahedron') {
            entity.tag.setAttribute('geometry', 'primitive: ' + entity.prim + '; radius: ' + entity.radius);
        }
    }


    static processMaterial(entity) {
        // handle common attributes
        var opts = entity.opts;

        if (!('opacity' in opts)) {
            opts.opacity = 1.0;
        }
        entity.opacity = opts.opacity;

        if (!('transparent' in opts)) {
            opts.transparent = false;
        }
        entity.transparent = opts.transparent;

        if (!('shader' in opts)) {
            opts.shader = 'standard';
        }
        entity.shader = opts.shader;

        if (!('side' in opts)) {
            opts.side = 'front';
        }
        entity.side = opts.side;

        if (!('metalness' in opts)) {
            opts.metalness = 0.1;
        }
        entity.metalness = opts.metalness;

        if (!('roughness' in opts)) {
            opts.roughness = 0.5;
        }
        entity.roughness = opts.roughness;

        if (!('repeatX' in opts)) {
            opts.repeatX = 1;
        }
        entity.repeatX = opts.repeatX;

        if (!('repeatY' in opts)) {
            opts.repeatY = 1;
        }
        entity.repeatY = opts.repeatY;

        // set color values
        if ('red' in opts) {
            entity.red = parseInt(opts.red);
        } else {
            entity.red = 255;
        }
        if ('green' in opts) {
            entity.green = parseInt(opts.green);
        } else {
            entity.green = 255;
        }
        if ('blue' in opts) {
            entity.blue = parseInt(opts.blue);
        } else {
            entity.blue = 255;
        }

        if ('asset' in opts) {
            entity.asset = opts.asset;
        } else {
            entity.asset = 'None';
        }


        // dynamic textures
        if ('dynamicTexture' in opts && opts.dynamicTexture == true) {
            entity.dynamicTexture = entity.opts.dynamicTexture;

            if ('dynamicTextureWidth' in opts) {
                entity.dynamicTextureWidth = opts.dynamicTextureWidth;
            } else {
                entity.dynamicTextureWidth = 0;
            }

            if ('dynamicTextureWidth' in opts) {
                entity.dynamicTextureHeight = opts.dynamicTextureHeight;
            } else {
                entity.dynamicTextureHeight = 0;
            }

            AFrameP5Utils.registerDynamicTexture(entity);
        } else {
            entity.dynamicTexture = false;
        }

    }

    static setMaterial(entity) {
        // set tag
        if (entity.asset == 'None') {
            entity.tag.setAttribute('material', 'opacity: ' + entity.opacity + '; transparent: ' + entity.transparent + '; shader: ' + entity.shader + '; side: ' + entity.side + '; repeat: ' + entity.repeatX + " " + entity.repeatY + '; color: rgb(' + entity.red + ',' + entity.green + ',' + entity.blue + ')');
        } else {
            entity.tag.setAttribute('material', 'opacity: ' + entity.opacity + '; transparent: ' + entity.transparent + '; shader: ' + entity.shader + '; side: ' + entity.side + '; src: #' + entity.asset + '; repeat: ' + entity.repeatX + " " + entity.repeatY + '; color: rgb(' + entity.red + ',' + entity.green + ',' + entity.blue + ')');
        }

    }



    static setLight(opts, entity) {
        if (!('color' in opts)) {
            opts.color = '#fff';
        }
        if (!('intensity' in opts)) {
            opts.intensity = 1.0;
        }
        if (!('type' in opts)) {
            opts.type = 'directional';
        }
        if (!('groundColor' in opts)) {
            opts.groundColor = '#fff';
        }
        if (!('decay' in opts)) {
            opts.decay = 1.0;
        }
        if (!('distance' in opts)) {
            opts.distance = 0.0;
        }
        if (!('angle' in opts)) {
            opts.angle = 60;
        }
        if (!('penumbra' in opts)) {
            opts.penumbra = 0.0;
        }
        if (!('target' in opts)) {
            opts.target = 'null';
        }

        if (opts.type == 'directional') {
            entity.tag.setAttribute('light', 'color: ' + opts.color + '; intensity: ' + opts.intensity + '; type: ' + opts.type);
        } else if (opts.type == 'ambient') {
            entity.tag.setAttribute('light', 'color: ' + opts.color + '; intensity: ' + opts.intensity + '; type: ' + opts.type);
        } else if (opts.type == 'hemisphere') {
            entity.tag.setAttribute('light', 'color: ' + opts.color + '; intensity: ' + opts.intensity + '; type: ' + opts.type + '; groundColor: ' + opts.groundColor);
        } else if (opts.type == 'point') {
            entity.tag.setAttribute('light', 'color: ' + opts.color + '; intensity: ' + opts.intensity + '; type: ' + opts.type + '; distance: ' + opts.distance + '; decay: ' + opts.decay);
        } else if (opts.type == 'spot') {
            entity.tag.setAttribute('light', 'color: ' + opts.color + '; intensity: ' + opts.intensity + '; type: ' + opts.type + '; angle: ' + opts.angle + '; decay: ' + opts.decay + '; distance: ' + opts.distance + '; penumbra: ' + opts.penumbra + '; target: ' + opts.target);
        }
    }


    static setScale(opts, entity) {
        // set scale
        if ('scaleX' in opts) {
            entity.scaleX = opts.scaleX;
        } else {
            entity.scaleX = 1;
        }

        if ('scaleY' in opts) {
            entity.scaleY = opts.scaleY;
        } else {
            entity.scaleY = 1;
        }

        if ('scaleZ' in opts) {
            entity.scaleZ = opts.scaleZ;
        } else {
            entity.scaleZ = 1;
        }

        // set tag attributes
        entity.tag.setAttribute('scale', entity.scaleX + ' ' + entity.scaleY + ' ' + entity.scaleZ);
    }


    static setPosition(opts, entity) {
        // set position
        if ('x' in opts) {
            entity.x = opts.x;
        } else {
            entity.x = 0;
        }
        if ('y' in opts) {
            entity.y = opts.y;
        } else {
            entity.y = 0;
        }
        if ('z' in opts) {
            entity.z = opts.z;
        } else {
            entity.z = 0;
        }

        // set tag attributes
        entity.tag.setAttribute('position', entity.x + ' ' + entity.y + ' ' + entity.z);
    }


    static setRotation(opts, entity) {
        // set rotation
        if ('rotationX' in opts) {
            entity.rotationX = opts.rotationX;
        } else {
            entity.rotationX = 0;
        }
        if ('rotationY' in opts) {
            entity.rotationY = opts.rotationY;
        } else {
            entity.rotationY = 0;
        }
        if ('rotationZ' in opts) {
            entity.rotationZ = opts.rotationZ;
        } else {
            entity.rotationZ = 0;
        }

        // set tag attributes
        entity.tag.setAttribute('rotation', entity.rotationX + ' ' + entity.rotationY + ' ' + entity.rotationZ);
    }


    static setVisibility(opts, entity) {
        // set visibility
        if ('visible' in opts) {
            entity.visible = opts.visible;
            entity.tag.setAttribute('visible', opts.visible);
        } else {
            entity.visible = true;
            entity.tag.setAttribute('visible', true);
        }
    }


    static initializerSettersAndGetters(entity) {
        entity.getWorldPosition = function() {
            var vectorHUD = new THREE.Vector3();
            vectorHUD.setFromMatrixPosition(this.tag.object3D.matrixWorld);
            return vectorHUD;
        }

        entity.nudge = function(nx, ny, nz) {
            this.x += nx;
            this.y += ny;
            this.z += nz;

            this.tag.setAttribute('position', this.x + ' ' + this.y + ' ' + this.z);
        }

        entity.constrainPosition = function(xmin, xmax, ymin, ymax, zmin, zmax) {
            if (this.x < xmin) {
                this.x = xmin;
            }
            if (this.y < ymin) {
                this.y = ymin;
            }
            if (this.z < zmin) {
                this.z = zmin;
            }
            if (this.x > xmax) {
                this.x = xmax;
            }
            if (this.y > ymax) {
                this.y = ymax;
            }
            if (this.z > zmax) {
                this.z = zmax;
            }

            this.tag.setAttribute('position', this.x + ' ' + this.y + ' ' + this.z);
        }

        entity.setPosition = function(nx, ny, nz) {
            this.x = nx;
            this.y = ny;
            this.z = nz;

            this.tag.setAttribute('position', this.x + ' ' + this.y + ' ' + this.z);
        }

        entity.getX = function() {
            return this.x;
        }

        entity.getY = function() {
            return this.y;
        }

        entity.getZ = function() {
            return this.z;
        }

        entity.setX = function(x) {
            this.x = x;

            this.tag.setAttribute('position', this.x + ' ' + this.y + ' ' + this.z);
        }

        entity.setY = function(y) {
            this.y = y;

            this.tag.setAttribute('position', this.x + ' ' + this.y + ' ' + this.z);
        }

        entity.setZ = function(z) {
            this.z = z;

            this.tag.setAttribute('position', this.x + ' ' + this.y + ' ' + this.z);
        }


        entity.setRotation = function(nx, ny, nz) {
            this.rotationX = nx;
            this.rotationY = ny;
            this.rotationZ = nz;

            this.tag.setAttribute('rotation', this.rotationX + ' ' + this.rotationY + ' ' + this.rotationZ);
        }

        entity.rotateX = function(nx) {
            this.rotationX = nx;

            this.tag.setAttribute('rotation', this.rotationX + ' ' + this.rotationY + ' ' + this.rotationZ);
        }

        entity.rotateY = function(ny) {
            this.rotationY = ny;

            this.tag.setAttribute('rotation', this.rotationX + ' ' + this.rotationY + ' ' + this.rotationZ);
        }

        entity.rotateZ = function(nz) {
            this.rotationZ = nz;

            this.tag.setAttribute('rotation', this.rotationX + ' ' + this.rotationY + ' ' + this.rotationZ);
        }

        entity.spinX = function(nx) {
            this.rotationX += nx;

            this.tag.setAttribute('rotation', this.rotationX + ' ' + this.rotationY + ' ' + this.rotationZ);
        }

        entity.spinY = function(ny) {
            this.rotationY += ny;

            this.tag.setAttribute('rotation', this.rotationX + ' ' + this.rotationY + ' ' + this.rotationZ);
        }

        entity.spinZ = function(nz) {
            this.rotationZ += nz;

            this.tag.setAttribute('rotation', this.rotationX + ' ' + this.rotationY + ' ' + this.rotationZ);
        }

        entity.getRotationX = function() {
            return this.rotationX;
        }

        entity.getRotationY = function() {
            return this.rotationY;
        }

        entity.getRotationZ = function() {
            return this.rotationZ;
        }

        entity.hide = function() {
            this.visible = false;

            this.tag.setAttribute('visible', this.visible);
        }

        entity.show = function() {
            this.visible = true;

            this.tag.setAttribute('visible', this.visible);
        }

        entity.toggleVisibility = function() {
            this.visible = !this.visible;

            this.tag.setAttribute('visible', this.visible);
        }

        entity.getVisibility = function() {
            return this.visible;
        }

        entity.getScale = function() {
            var s = {};
            s.x = this.scaleX;
            s.y = this.scaleY;
            s.z = this.scaleZ;
            return s;
        }

        entity.getScaleX = function() {
            return this.scaleX;
        }

        entity.getScaleY = function() {
            return this.scaleY;
        }

        entity.getScaleZ = function() {
            return this.scaleZ;
        }

        entity.setScale = function(x, y, z) {
            this.scaleX = x;
            this.scaleY = y;
            this.scaleZ = z;

            this.tag.setAttribute('scale', this.scaleX + ' ' + this.scaleY + ' ' + this.scaleZ);
        }

        entity.setScaleX = function(sx) {
            this.scaleX = sx;

            this.tag.setAttribute('scale', this.scaleX + ' ' + this.scaleY + ' ' + this.scaleZ);
        }

        entity.setScaleY = function(sy) {
            this.scaleY = sy;

            this.tag.setAttribute('scale', this.scaleX + ' ' + this.scaleY + ' ' + this.scaleZ);
        }

        entity.setScaleZ = function(sz) {
            this.scaleZ = sz;

            this.tag.setAttribute('scale', this.scaleX + ' ' + this.scaleY + ' ' + this.scaleZ);
        }

        entity.nudgeScale = function(v) {
            this.scaleX += v;
            this.scaleY += v;
            this.scaleZ += v;

            this.tag.setAttribute('scale', this.scaleX + ' ' + this.scaleY + ' ' + this.scaleZ);
        }


        entity.getProperty = function(prop) {
            if (prop in this) {
                return this[prop];
            }
            return 'none';
        }

        // child management
        entity.addChild = function(child) {
            // append to our child array
            this.children.push(child);

            // append to our DOM element
            this.tag.appendChild(child.tag);
        }
        entity.add = entity.addChild

        entity.removeChild = function(child) {
            // first ensure that the item is actually a child
            var isChild = false;
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i] == child) {
                    isChild = true;
                    break;
                }
            }

            if (isChild) {
                this.children.splice(i, 1);
                this.tag.removeChild(child.tag);
            }
        }
        entity.remove = entity.removeChild


        entity.getChildren = function() {
            var returnChildren = [];
            for (var i = 0; i < this.children.length; i++) {
                returnChildren.push(this.children[i]);
            }

            return returnChildren;
        }



        // text units don't need geometry or material functions
        if (entity.prim == 'text') {
            return;
        }



        // material getters & setters
        entity.setColor = function(r, g, b) {
            if ('red' in this && 'green' in this && 'blue' in this) {
                this.red = parseInt(r);
                this.green = parseInt(g);
                this.blue = parseInt(b);

                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.setRed = function(r) {
            if ('red' in this) {
                this.red = parseInt(r);
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.setGreen = function(g) {
            if ('green' in this) {
                this.green = parseInt(g);
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.setBlue = function(b) {
            if ('blue' in this) {
                this.blue = parseInt(b);
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.getRed = function() {
            if ('red' in this) {
                return this.red;
            }
            return "none";
        }

        entity.getGreen = function() {
            if ('green' in this) {
                return this.green;
            }
            return "none";
        }

        entity.getBlue = function() {
            if ('blue' in this) {
                return this.blue;
            }
            return "none";
        }

        entity.getOpacity = function() {
            if ('opacity' in this) {
                return this.opacity;
            }
            return "none";
        }
        entity.setOpacity = function(v) {
            if ('opacity' in this) {
                this.opacity = v;
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.getTransparent = function() {
            if ('transparent' in this) {
                return this.transparent;
            }
            return "none";
        }
        entity.setTransparent = function(v) {
            if ('transparent' in this) {
                this.transparent = v;
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.getShader = function() {
            if ('shader' in this) {
                return this.shader;
            }
            return "none";
        }
        entity.setShader = function(v) {
            if ('shader' in this) {
                this.shader = v;
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.getSide = function() {
            if ('side' in this) {
                return this.side;
            }
            return "none";
        }
        entity.setSide = function(v) {
            if ('side' in this) {
                this.side = v;
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.getMetalness = function() {
            if ('metalness' in this) {
                return this.metalness;
            }
            return "none";
        }
        entity.setMetalness = function(v) {
            if ('metalness' in this) {
                this.metalness = v;
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.getRoughness = function() {
            if ('roughness' in this) {
                return this.roughness;
            }
            return "none";
        }
        entity.setRoughness = function(v) {
            if ('roughness' in this) {
                this.roughness = v;
                AFrameP5Utils.setMaterial(this);
            }
        }

        entity.getRepeatX = function() {
            if ('repeatX' in this) {
                return this.repeatX;
            }
            return "none";
        }
        entity.setRepeatX = function(v) {
            if ('repeatX' in this) {
                this.repeatX = v;
                AFrameP5Utils.setMaterial(this);
            }
        }

        // need to add repeatY zzz

        entity.getAsset = function() {
            if ('asset' in this) {
                return this.asset;
            }
            return "none";
        }
        entity.setAsset = function(v) {
            if ('asset' in this) {
                this.asset = v;
                AFrameP5Utils.setMaterial(this);
            }
        }


        entity.getOpacity = function() {
            return this.opacity;
        }




        // geometry getters & setters
        entity.setWidth = function(nw) {
            if ('width' in this) {
                this.width = nw;
                AFrameP5Utils.setGeometry(this);
            }
        }

        entity.setDepth = function(nd) {
            if ('depth' in this) {
                this.depth = nd;
                AFrameP5Utils.setGeometry(this);
            }
        }

        entity.setHeight = function(nh) {
            if ('height' in this) {
                this.height = nh;
                AFrameP5Utils.setGeometry(this);
            }
        }

        entity.getWidth = function() {
            if ('width' in this) {
                return this.width;
            }
            return 'none';
        }

        entity.getHeight = function() {
            if ('height' in this) {
                return this.height;
            }
            return 'none';
        }

        entity.getDepth = function() {
            if ('depth' in this) {
                return this.depth;
            }
            return 'none';
        }

        entity.getRadius = function() {
            if ('radius' in this) {
                return this.radius;
            }
            return 'none';
        }

        entity.setRadius = function(r) {
            if ('radius' in this) {
                this.radius = r;
                AFrameP5Utils.setGeometry(this);
            }
        }

        entity.changeRadius = function(r) {
            if ('radius' in this) {
                this.radius += r;
                AFrameP5Utils.setGeometry(this);
            }
        }


        entity.getSegmentsWidth = function() {
            if ('segmentsWidth' in this) {
                return this.segmentsWidth;
            }
            return "none";
        }
        entity.getSegmentsHeight = function() {
            if ('segmentsHeight' in this) {
                return this.segmentsHeight;
            }
            return "none";
        }
        entity.getPhiStart = function() {
            if ('phiStart' in this) {
                return this.phiStart;
            }
            return "none";
        }
        entity.getPhiLength = function() {
            if ('phiLength' in this) {
                return this.phiLength;
            }
            return "none";
        }
        entity.getThetaStart = function() {
            if ('thetaStart' in this) {
                return this.thetaStart;
            }
            return "none";
        }
        entity.getThetaLength = function() {
            if ('thetaLength' in this) {
                return this.thetaLength;
            }
            return "none";
        }
        entity.getArc = function() {
            if ('arc' in this) {
                return this.arc;
            }
            return "none";
        }

        entity.setSegmentsWidth = function(v) {
            if ('segmentsWidth' in this) {
                this.segmentsWidth = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setSegmentsHeight = function(v) {
            if ('segmentsHeight' in this) {
                this.segmentsHeight = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setPhiStart = function(v) {
            if ('phiStart' in this) {
                this.phiStart = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setPhiLength = function(v) {
            if ('phiLength' in this) {
                this.phiLength = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setThetaStart = function(v) {
            if ('thetaStart' in this) {
                this.thetaStart = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setThetaLength = function(v) {
            if ('thetaLength' in this) {
                this.thetaLength = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.getSegments = function() {
            if ('segments' in this) {
                return this.segments;
            }
            return "none";
        }
        entity.setSegments = function(v) {
            if ('segments' in this) {
                this.segments = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.getOpenEnded = function() {
            if ('openEnded' in this) {
                return this.openEnded;
            }
            return "none";
        }
        entity.getRadiusBottom = function() {
            if ('radiusBottom' in this) {
                return this.radiusBottom;
            }
            return "none";
        }
        entity.getRadiusTop = function() {
            if ('radiusTop' in this) {
                return this.radiusTop;
            }
            return "none";
        }
        entity.getRadiusInner = function() {
            if ('radiusInner' in this) {
                return this.radiusInner;
            }
            return "none";
        }
        entity.getRadiusOuter = function() {
            if ('radiusOuter' in this) {
                return this.radiusOuter;
            }
            return "none";
        }
        entity.getRadiusTubular = function() {
            if ('radiusTubular' in this) {
                return this.radiusTubular;
            }
            return "none";
        }
        entity.getSegmentsRadial = function() {
            if ('segmentsRadial' in this) {
                return this.segmentsRadial;
            }
            return "none";
        }
        entity.getSegmentsTubular = function() {
            if ('segmentsTubular' in this) {
                return this.segmentsTubular;
            }
            return "none";
        }
        entity.getSegmentsTheta = function() {
            if ('segmentsTheta' in this) {
                return this.segmentsTheta;
            }
            return "none";
        }
        entity.getSegmentsPhi = function() {
            if ('segmentsPhi' in this) {
                return this.segmentsPhi;
            }
            return "none";
        }
        entity.getP = function() {
            if ('p' in this) {
                return this.p;
            }
            return "none";
        }
        entity.getQ = function() {
            if ('q' in this) {
                return this.q;
            }
            return "none";
        }
        entity.setOpenEnded = function(v) {
            if ('openEnded' in this) {
                this.openEnded = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setRadiusBottom = function(v) {
            if ('radiusBottom' in this) {
                this.radiusBottom = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setRadiusTop = function(v) {
            if ('radiusTop' in this) {
                this.radiusTop = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setRadiusInner = function(v) {
            if ('radiusInner' in this) {
                this.radiusInner = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setRadiusOuter = function(v) {
            if ('radiusOuter' in this) {
                this.radiusOuter = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setRadiusTubular = function(v) {
            if ('radiusTubular' in this) {
                this.radiusTubular = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setSegmentsRadial = function(v) {
            if ('segmentsRadial' in this) {
                this.segmentsRadial = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setSegmentsTubular = function(v) {
            if ('segmentsTubular' in this) {
                this.segmentsTubular = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setSegmentsTheta = function(v) {
            if ('segmentsTheta' in this) {
                this.segmentsTheta = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setSegmentsPhi = function(v) {
            if ('segmentsPhi' in this) {
                this.segmentsPhi = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setArc = function(v) {
            if ('arc' in this) {
                this.arc = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setP = function(v) {
            if ('p' in this) {
                this.p = v;
                AFrameP5Utils.setGeometry(this);
            }
        }
        entity.setQ = function(v) {
            if ('q' in this) {
                this.q = v;
                AFrameP5Utils.setGeometry(this);
            }
        }


        // update texture (for canvas textures)
        entity.updateTexture = function() {
            try {
                this.tag.object3DMap.mesh.material.map.needsUpdate = true;
            } catch (e) {}
        }

    }



    static registerDynamicTexture(entity) {
        AFrameP5Utils.entitiesUsingDynamicTextures.push(entity)
    }

    static updateDynamicTextures() {
        for (let i = 0; i < AFrameP5Utils.entitiesUsingDynamicTextures.length; i++) {
            AFrameP5Utils.entitiesUsingDynamicTextures[i].updateTexture();
        }
    }



} // end AFrameP5Utils




class Marker {

    constructor(id, world) {
        // store a reference to the world
        this.worldRef = world;

        // create a tag reference for this entity
        this.tag = document.getElementById(id);

        // setup a "children" array
        this.children = [];
    }

    // child management
    addChild(child) {
        // append to our child array
        this.children.push(child);

        // give this child a reference to the world
        child.worldRef = this.worldRef;

        // append to our DOM element
        this.tag.appendChild(child.tag);
    }
    add(child) {
        this.addChild(child);
    }

    removeChild(child) {
        // first ensure that the item is actually a child
        var isChild = false;
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i] == child) {
                isChild = true;
                break;
            }
        }

        if (isChild) {
            this.children.splice(i, 1);
            this.tag.removeChild(child.tag);
        }
    }
    remove(child) {
        this.removeChild(child);
    }

    getChildren() {
        var returnChildren = [];
        for (var i = 0; i < this.children.length; i++) {
            returnChildren.push(this.children[i]);
        }

        return returnChildren;
    }

    isVisible() {
        return this.tag.object3D.visible;
    }

    getScreenPosition() {
        var renderer = this.worldRef.scene.renderer;
        var camera = this.worldRef.scene.camera;
        var vector = new THREE.Vector3();
        var vector2 = new THREE.Vector2();
        var widthHalf = 0.5 * renderer.getSize(vector2).width;
        var heightHalf = 0.5 * renderer.getSize(vector2).height;

        this.tag.object3D.updateMatrixWorld();
        vector.setFromMatrixPosition(this.tag.object3D.matrixWorld);
        vector.project(camera);

        vector.x = ((vector.x * widthHalf) + widthHalf) / this.worldRef.canvasFactor;
        vector.y = (-(vector.y * heightHalf) + heightHalf) / this.worldRef.canvasFactor;

        return {
            x: vector.x,
            y: vector.y
        };
    }
}


class World {

    constructor(id) {
        console.log("A-FrameP5 AR " + _release + " (Craig Kapp, " + _releaseDate + ")");
        console.log("Documentation: https://cs.nyu.edu/~kapp/aframep5-ar");

        // store a-frame ID
        if (id == undefined) {
            id = "ARScene";
        }
        this.scene = document.getElementById(id);

        // hack the camera a bit (for 3D picking)
        // this is not great at all, but it's better than the default
        this.scene.camera.position.set(0,0,-0.1);
        this.scene.camera.zoom = 2.22;

        // reference the three.js scene directly
        this.threeSceneReference = this.scene.object3D;

        // create p5 canvas
        this.canvas = createCanvas(800, 600);
        this.canvas.style('position', 'absolute');
        this.canvas.style('top', '0px');
        this.canvas.style('left', '0px');
        this.canvas.style('z-index', '101');
        this.canvasFactor = 1.0;
        this.canvasWidth = 800;
        this.canvasHeight = 600;
        this.canvas.style('margin-left', '0px');
        this.canvas.style('margin-top', '0px');
        this.canvasMarginLeft = 0;
        this.canvasMarginTop = 0;

        // debug container
        this.debugContainer = document.createElement('div');
        this.debugContainer.style.position = 'absolute';
        this.debugContainer.style.top = '0px';
        this.debugContainer.style.left = '0px';
        this.debugContainer.style['z-index'] =  '102';
        //this.debugContainer.innerHTML = 'debug';
        document.body.appendChild(this.debugContainer);

        // raycaster logic (for mouse events & picking)
        this.raycaster = new THREE.Raycaster();
        this.cursorPosition = new THREE.Vector2(0, 0);
        this.intersects = [];

        // set up an array to hold any dynamic textures we need to be aware of
        this.dynamicTextures = {};

        // assume we are in 'loop' mode (controls whether we will take over calling 'draw' on VR headsets where requestAnimationFrame isn't supported)
        this.loop = true;

        // set up internal update loop
        var _this = this;
        this.frameCount = 0;
        this.p5FrameCount = null;
        this.p5FrameCountStalled = 0;
        var _interval = setInterval(function() {

            // adjust p5 canvas size, if necessary
            if (_this.canvas != undefined) {
	            _this.frameCount++;

	            // update dynamic textures, if necessary
	            AFrameP5Utils.updateDynamicTextures();

	            // determine if we need to step in and call 'draw' for p5 - this happens when viewing an A-Frame sketch on a VR headset in immersive mode
	            // due to the face that 'requestAnimationFrame' isn't supported
	            if (_this.loop) {
	                try {
	                    if (_this.p5FrameCount == null) {
	                        _this.p5FrameCount = frameCount;
	                    } else if (_this.p5FrameCount == frameCount) {
	                        _this.p5FrameCountStalled++;
	                    } else {
	                        _this.p5FrameCount = frameCount;
	                        _this.p5FrameCountStalled = 0;
	                    }

	                    // take over calling the 'draw' function
	                    if (_this.p5FrameCountStalled > 60) {
	                        redraw();
	                        _this.p5FrameCount++;
	                    }
	                } catch (err) {}
	            }

                var v = document.getElementsByTagName('video');
                if (v.length > 0) {
                    var nw = parseFloat(v[0].style.width.replace('px', '')).toFixed(2);
                    var nh = parseFloat(v[0].style.height.replace('px', '')).toFixed(2);
                    var ml = parseFloat(v[0].style['margin-left'].replace('px', '')).toFixed(2);
                    var mt = parseFloat(v[0].style['margin-top'].replace('px', '')).toFixed(2);

                    if (nw != _this.canvasWidth || nh != _this.canvasHeight || ml != _this.canvasMarginLeft || mt != _this.canvasMarginTop) {
                        _this.canvasWidth = nw;
                        _this.canvasHeight = nh;
                        _this.canvasFactor = (nw / 800).toFixed(2);
                        _this.canvasMarginLeft = ml;
                        _this.canvasMarginTop = mt;
                        _this.canvas.style('width', v[0].style.width);
                        _this.canvas.style('height', v[0].style.height);
                        _this.canvas.style('margin-top', v[0].style['margin-top']);
                        _this.canvas.style('margin-left', v[0].style['margin-left']);

                    }
                }
            }

        }, 10); // end internal update loop


        // global click handler
        document.addEventListener('click', function(evt) {
            _this.triggerClickFunction(evt);
        }); // end internal global click handler
        document.addEventListener('touchstart', function(evt) {
            _this.triggerClickFunction(evt);
        }); // end internal global click handler

    }

    clearDrawingCanvas() {
        this.canvas.drawingContext.clearRect(0, 0, 800, 600);
    }

    getMarker(id) {
        return new Marker(id, this);
    }

    castRay(evt) {
        this.cursorPosition.x = (evt.pageX / window.innerWidth) * 2 - 1;
        this.cursorPosition.y = -1 * ((evt.pageY / window.innerHeight) * 2 - 1);
        this.raycaster.setFromCamera(this.cursorPosition, this.scene.camera);
        this.intersects = this.raycaster.intersectObjects(this.threeSceneReference.children, true);

        if (this.intersects.length > 0) {
            return this.intersects[0];
        }
        return false;
    }

    triggerClickFunction(evt) {
        var obj = this.castRay(evt);
        if (obj && obj.object.parent.el && obj.object.parent.el.eRef != undefined && obj.object.parent.el.eRef.clickFunction != undefined) {
            obj.object.parent.el.eRef.clickFunction(obj.object.parent.el.eRef);
        }
    }

    createDynamicTextureFromCreateGraphics(cg) {

        let _cg = cg;
        let _id = 'canvas-' + Math.random().toString(36).substr(2, 16);

        // use p5's 'instance mode' to set up a separate sketch framework to render the graphics buffer
        let sketchCode = function(p) {

            let _p5FrameCount = null;
            let _p5FrameCountStalled = 0;

            p.setup = function() {
                let c = p.createCanvas(_cg.width, _cg.height).id(_id);

                // internal monitoring system to ensure that the texture gets updated when VR browsers go into full immersion mode
                // (this disables requestAnimationFrame which p5 relies on)
                setInterval(function() {
                    if (_p5FrameCount == null) {
                        _p5FrameCount = p.frameCount;
                    } else if (_p5FrameCount == p.frameCount) {
                        _p5FrameCountStalled++;
                    } else {
                        _p5FrameCount = p.frameCount;
                        _p5FrameCountStalled = 0;
                    }

                    // take over calling the 'draw' function
                    if (_p5FrameCountStalled > 60) {
                        p.redraw();
                        _p5FrameCount++;
                    }
                }, 16);
            }
            p.draw = function() {
                p.clear();
                p.image(_cg, 0, 0);
            }


        }

        this.dynamicTextures[_id] = new p5(sketchCode);
        return _id;
    }


    noLoop() {
        this.loop = false;
        try {
            noLoop();
        } catch (err) {}
    }

    loop() {
        this.loop = true;
        try {
            loop();
        } catch (err) {}
    }

}
