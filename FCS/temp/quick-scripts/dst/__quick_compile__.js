
(function () {
var scripts = [{"deps":{"./assets/Script/NPC/CattySpawner":30,"./assets/Script/NPC/GoblinController":33,"./assets/Script/NPC/GoblinSpawner":34,"./assets/Script/NPC/NPCWanderCatty":39,"./assets/Script/NPC/NPCWanderGoblin":40,"./assets/Script/NPC/CattyController":32,"./assets/Script/PauseManager":3,"./assets/Script/Player/IInputControls":31,"./assets/Script/Player/KeyboardControls":41,"./assets/Script/Player/KeyboardControls2":35,"./assets/Script/Player/Level2icecream1":38,"./assets/Script/Player/Level2icecream2":14,"./assets/Script/Player/PlayerController 2":36,"./assets/Script/Player/PlayerController":42,"./assets/Script/Player/GamepadControls":37,"./assets/Script/scene/score-scene":43,"./assets/Script/scene/uiManager":1,"./assets/Script/scene/ScorePersist":44,"./assets/Script/script/AutoSceneSwitcher":4,"./assets/Script/script/CameraAutoMove2D":7,"./assets/Script/script/CloseButton":5,"./assets/Script/script/ExpandButton":8,"./assets/Script/script/ExpandPage":6,"./assets/Script/script/FirebaseManager":11,"./assets/Script/script/GoToPage":12,"./assets/Script/script/Login":9,"./assets/Script/script/MenuManager":13,"./assets/Script/script/PlayerAnimationController":10,"./assets/Script/script/PlayerModeSelector":20,"./assets/Script/script/PlayerModeWatcher":16,"./assets/Script/script/ShowImageOnPlane":19,"./assets/Script/script/Signup":21,"./assets/Script/script/AudioManager":15,"./assets/Script/script/select/GameManager":18,"./assets/Script/script/select/PositionManager":2,"./assets/Script/script/select/cameraCtrl":25,"./assets/Script/script/select/flagTrigger":27,"./assets/Script/script/select/hintAnimation":17,"./assets/Script/script/select/icecreamCheck":22,"./assets/Script/script/select/maskTransition3D":23,"./assets/Script/script/select/pizzaCheck":24,"./assets/Script/script/select/vehicleCtrl":29,"./assets/Script/script/select/BGMManager":28,"./assets/Script/debug":26},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/uiManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/PositionManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/PauseManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/AutoSceneSwitcher.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/CloseButton.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/ExpandPage.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/CameraAutoMove2D.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/ExpandButton.js"},{"deps":{"./FirebaseManager":11},"path":"preview-scripts/assets/Script/script/Login.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/PlayerAnimationController.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/FirebaseManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/GoToPage.js"},{"deps":{"./AudioManager":15},"path":"preview-scripts/assets/Script/script/MenuManager.js"},{"deps":{"./KeyboardControls2":35},"path":"preview-scripts/assets/Script/Player/Level2icecream2.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/AudioManager.js"},{"deps":{"./PlayerModeSelector":20},"path":"preview-scripts/assets/Script/script/PlayerModeWatcher.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/hintAnimation.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/ShowImageOnPlane.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/PlayerModeSelector.js"},{"deps":{"./FirebaseManager":11},"path":"preview-scripts/assets/Script/script/Signup.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/icecreamCheck.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/maskTransition3D.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/pizzaCheck.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/cameraCtrl.js"},{"deps":{},"path":"preview-scripts/assets/Script/debug.js"},{"deps":{"./PositionManager":2},"path":"preview-scripts/assets/Script/script/select/flagTrigger.js"},{"deps":{},"path":"preview-scripts/assets/Script/script/select/BGMManager.js"},{"deps":{"./PositionManager":2},"path":"preview-scripts/assets/Script/script/select/vehicleCtrl.js"},{"deps":{},"path":"preview-scripts/assets/Script/NPC/CattySpawner.js"},{"deps":{},"path":"preview-scripts/assets/Script/Player/IInputControls.js"},{"deps":{},"path":"preview-scripts/assets/Script/NPC/CattyController.js"},{"deps":{},"path":"preview-scripts/assets/Script/NPC/GoblinController.js"},{"deps":{"./GoblinController":33},"path":"preview-scripts/assets/Script/NPC/GoblinSpawner.js"},{"deps":{},"path":"preview-scripts/assets/Script/Player/KeyboardControls2.js"},{"deps":{"./KeyboardControls2":35},"path":"preview-scripts/assets/Script/Player/PlayerController 2.js"},{"deps":{},"path":"preview-scripts/assets/Script/Player/GamepadControls.js"},{"deps":{"./KeyboardControls":41},"path":"preview-scripts/assets/Script/Player/Level2icecream1.js"},{"deps":{},"path":"preview-scripts/assets/Script/NPC/NPCWanderCatty.js"},{"deps":{},"path":"preview-scripts/assets/Script/NPC/NPCWanderGoblin.js"},{"deps":{},"path":"preview-scripts/assets/Script/Player/KeyboardControls.js"},{"deps":{"./KeyboardControls":41},"path":"preview-scripts/assets/Script/Player/PlayerController.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/score-scene.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/ScorePersist.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    