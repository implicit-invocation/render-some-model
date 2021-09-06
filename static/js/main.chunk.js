(this["webpackJsonpthree-tile-poc"] = this["webpackJsonpthree-tile-poc"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_utils_SkeletonUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/utils/SkeletonUtils */ "./node_modules/three/examples/jsm/utils/SkeletonUtils.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);







const init = async () => {
  var stats = new stats_js__WEBPACK_IMPORTED_MODULE_4__();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom

  document.body.appendChild(stats.dom);
  const scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
  const aspectRatio = window.innerWidth / window.innerHeight;
  const cameraWidth = 10;
  const cameraHeight = cameraWidth / aspectRatio;
  const modelLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
  const knightContainer = await modelLoader.loadAsync("./KnightCharacter.gltf");
  const knight = knightContainer.scene; // const loader = new THREE.TextureLoader();
  // const treeTexture = await loader.loadAsync("./tree.jpg");

  const camera = new three__WEBPACK_IMPORTED_MODULE_1__["OrthographicCamera"](cameraWidth / -2, // left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, // bottom
  0, // near plane
  700 // far plane
  );
  camera.position.set(0, 5, 3);
  camera.lookAt(0, 0, 0);
  const renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const light = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](0xffffff, 0.6); // soft white light

  scene.add(light);
  const directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](0xffffff, 0.5);
  scene.add(directionalLight);
  const boxGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"]();
  const material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshStandardMaterial"]({
    color: 0x0095dd
  });
  const leftWall = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](boxGeometry, material);
  leftWall.scale.z = 10;
  leftWall.position.set(-0.5 - 5, 0.5, 0);
  scene.add(leftWall);
  const rightWall = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](boxGeometry, material);
  rightWall.scale.z = 10;
  rightWall.position.set(0.5 + 5, 0.5, 0);
  scene.add(rightWall);
  const topWall = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](boxGeometry, material);
  topWall.scale.x = 10;
  topWall.position.set(0, 0.5, -5 - 0.5);
  scene.add(topWall);
  const bottomWall = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](boxGeometry, material);
  bottomWall.scale.x = 10;
  bottomWall.position.set(0, 0.5, 5 + 0.5);
  scene.add(bottomWall); // cube.position.set(0.5, 0.5, 0.5);

  const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](10, 10);
  const planeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshStandardMaterial"]({
    color: 0x999999
  });
  const plane = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);
  camera.position.z = 2.5; // const treeMaterial = new THREE.SpriteMaterial({ map: treeTexture });
  // const sprite = new THREE.Sprite(treeMaterial);
  // sprite.center.set(0.5, 0);
  // sprite.position.set(0, 0, 1.5);
  // scene.add(sprite);

  var grid = new three__WEBPACK_IMPORTED_MODULE_1__["GridHelper"](10, 10);
  grid.position.y += 0.01;
  scene.add(grid);
  const models = [];
  const knightClips = knightContainer.animations;
  const center = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0);

  for (let i = 0; i < 150; i++) {
    const model = three_examples_jsm_utils_SkeletonUtils__WEBPACK_IMPORTED_MODULE_3__["clone"](knight);
    model.scale.set(0.3, 0.3, 0.3);
    model.position.set(Math.random() * 10 - 5, 0, Math.random() * 10 - 5);
    model.animationMixer = new three__WEBPACK_IMPORTED_MODULE_1__["AnimationMixer"](model);
    const clip = three__WEBPACK_IMPORTED_MODULE_1__["AnimationClip"].findByName(knightClips, "Run");
    model.animationMixer.clipAction(clip).play();
    const vel = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](2, 0);
    vel.rotateAround(center, Math.random() * Math.PI * 2);
    model.vel = vel;
    models.push(model);
    scene.add(model);
  } // let speedZ = 0.01;
  // let posZ = sprite.position.z;


  const animate = function () {
    requestAnimationFrame(animate);
    const delta = 0.015; // if (posZ > 3) {
    //   speedZ = -0.01;
    // } else if (posZ < -1) {
    //   speedZ = 0.01;
    // }
    // posZ += speedZ;
    // sprite.position.z = Math.round(posZ);

    stats.begin();

    for (let model of models) {
      model.position.x += model.vel.x * delta;
      model.position.z += model.vel.y * delta;

      if (model.position.x >= 5 || model.position.x <= -5) {
        model.vel.x *= -1;
      }

      if (model.position.z >= 5 || model.position.z <= -5) {
        model.vel.y *= -1;
      }

      model.animationMixer.update(delta);
      model.rotation.y = Math.PI / 2 - model.vel.angle();
    }

    renderer.render(scene, camera);
    stats.end();
  };

  animate();
};

init();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Cu8\projects\three-tile-poc\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\Cu8\projects\three-tile-poc\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! C:\Users\Cu8\projects\three-tile-poc\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\Cu8\projects\three-tile-poc\src\index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map