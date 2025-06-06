
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scenes/NewScript');
require('./assets/Script/NPC/CattyController');
require('./assets/Script/NPC/CattySpawner');
require('./assets/Script/NPC/GoblinController');
require('./assets/Script/NPC/GoblinSpawner');
require('./assets/Script/NPC/NPCWanderCatty');
require('./assets/Script/NPC/NPCWanderGoblin');
require('./assets/Script/PauseManager');
require('./assets/Script/PersistentUser');
require('./assets/Script/Player/GamepadControls');
require('./assets/Script/Player/IInputControls');
require('./assets/Script/Player/KeyboardControls');
require('./assets/Script/Player/KeyboardControls2');
require('./assets/Script/Player/Level2icecream1');
require('./assets/Script/Player/Level2icecream2');
require('./assets/Script/Player/PlayerController 2');
require('./assets/Script/Player/PlayerController');
require('./assets/Script/debug');
require('./assets/Script/scene/ScorePersist');
require('./assets/Script/scene/score-scene');
require('./assets/Script/scene/uiManager');
require('./assets/Script/script/AudioManager');
require('./assets/Script/script/AutoSceneSwitcher');
require('./assets/Script/script/CameraAutoMove2D');
require('./assets/Script/script/CloseButton');
require('./assets/Script/script/ExpandButton');
require('./assets/Script/script/ExpandPage');
require('./assets/Script/script/FirebaseManager');
require('./assets/Script/script/GameManager-level1');
require('./assets/Script/script/GoToPage');
require('./assets/Script/script/Login');
require('./assets/Script/script/MenuManager');
require('./assets/Script/script/PlayerAnimationController');
require('./assets/Script/script/PlayerModeSelector');
require('./assets/Script/script/PlayerModeWatcher');
require('./assets/Script/script/ShowImageOnPlane');
require('./assets/Script/script/Signup');
require('./assets/Script/script/select/BGMManager');
require('./assets/Script/script/select/GameManager');
require('./assets/Script/script/select/PositionManager');
require('./assets/Script/script/select/cameraCtrl');
require('./assets/Script/script/select/flagTrigger');
require('./assets/Script/script/select/hintAnimation');
require('./assets/Script/script/select/icecreamCheck');
require('./assets/Script/script/select/maskTransition3D');
require('./assets/Script/script/select/pizzaCheck');
require('./assets/Script/script/select/vehicleCtrl');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();