
(function () {
var scripts = [{"deps":{"./neutrinoparticles-runtime/NeutrinoAssemblerJSB":1,"./neutrinoparticles-runtime/NeutrinoAssemblerWebGL":3,"./neutrinoparticles-runtime/NeutrinoComponent":5,"./neutrinoparticles-runtime/NeutrinoContext":4,"./neutrinoparticles-runtime/NeutrinoSettings":6,"./neutrinoparticles-runtime/NeutrinoAssembler":7,"./neutrinoparticles-runtime/neutrinoparticles.js/neutrinoparticles.umd":2,"./assets/Script/Controller/CoinController":13,"./assets/Script/Controller/GameController":17,"./assets/Script/Controller/GamePlay":15,"./assets/Script/Controller/KingController":16,"./assets/Script/Controller/LoadFoodController":14,"./assets/Script/Controller/SpawnController":25,"./assets/Script/Controller/TouchAreaController":18,"./assets/Script/Controller/BaseController":21,"./assets/Script/Data/Ultils":10,"./assets/Script/Data/constants":19,"./assets/Script/Data/IronSource":20,"./assets/Script/Other/CTA":11,"./assets/Script/Other/Army":22,"./assets/Script/Plugin/Responsive":23,"./assets/Script/Plugin/Singleton":12,"./assets/Script/Plugin/AudioManager":24,"./assets/Script/Controller/BossController":9,"./assets/neutrinoparticles/textures":8},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/neutrinoparticles-runtime/NeutrinoAssemblerJSB.js"},{"deps":{},"path":"preview-scripts/neutrinoparticles-runtime/neutrinoparticles.js/neutrinoparticles.umd.js"},{"deps":{},"path":"preview-scripts/neutrinoparticles-runtime/NeutrinoAssemblerWebGL.js"},{"deps":{"./neutrinoparticles.js/neutrinoparticles.umd":2},"path":"preview-scripts/neutrinoparticles-runtime/NeutrinoContext.js"},{"deps":{"./NeutrinoSettings":6,"./NeutrinoContext":4},"path":"preview-scripts/neutrinoparticles-runtime/NeutrinoComponent.js"},{"deps":{},"path":"preview-scripts/neutrinoparticles-runtime/NeutrinoSettings.js"},{"deps":{"./NeutrinoAssemblerWebGL":3,"./NeutrinoAssemblerJSB":1},"path":"preview-scripts/neutrinoparticles-runtime/NeutrinoAssembler.js"},{"deps":{},"path":"preview-scripts/assets/neutrinoparticles/textures.js"},{"deps":{"../Data/constants":19,"../Plugin/AudioManager":24},"path":"preview-scripts/assets/Script/Controller/BossController.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/Ultils.js"},{"deps":{"../Controller/GameController":17,"../Data/constants":19,"../Plugin/AudioManager":24},"path":"preview-scripts/assets/Script/Other/CTA.js"},{"deps":{},"path":"preview-scripts/assets/Script/Plugin/Singleton.js"},{"deps":{"../Data/constants":19,"../Plugin/AudioManager":24},"path":"preview-scripts/assets/Script/Controller/CoinController.js"},{"deps":{"../Data/constants":19},"path":"preview-scripts/assets/Script/Controller/LoadFoodController.js"},{"deps":{"./GameController":17,"./LoadFoodController":14,"./SpawnController":25,"../Data/constants":19,"../Plugin/AudioManager":24},"path":"preview-scripts/assets/Script/Controller/GamePlay.js"},{"deps":{"../Data/constants":19,"../Plugin/AudioManager":24,"../Plugin/Responsive":23},"path":"preview-scripts/assets/Script/Controller/KingController.js"},{"deps":{"../Data/constants":19,"../Plugin/AudioManager":24},"path":"preview-scripts/assets/Script/Controller/GameController.js"},{"deps":{"../Data/constants":19,"../Data/IronSource":20,"../Plugin/AudioManager":24,"./GameController":17,"./GamePlay":15},"path":"preview-scripts/assets/Script/Controller/TouchAreaController.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/constants.js"},{"deps":{"../Data/constants":19,"../Plugin/AudioManager":24},"path":"preview-scripts/assets/Script/Data/IronSource.js"},{"deps":{"../Data/constants":19,"../Plugin/AudioManager":24,"./GamePlay":15},"path":"preview-scripts/assets/Script/Controller/BaseController.js"},{"deps":{"../Controller/KingController":16,"../Data/constants":19,"../Plugin/AudioManager":24},"path":"preview-scripts/assets/Script/Other/Army.js"},{"deps":{"../Controller/BaseController":21,"../Controller/CoinController":13,"../Data/constants":19},"path":"preview-scripts/assets/Script/Plugin/Responsive.js"},{"deps":{"../Data/constants":19},"path":"preview-scripts/assets/Script/Plugin/AudioManager.js"},{"deps":{"../Data/constants":19,"../Other/Army":22},"path":"preview-scripts/assets/Script/Controller/SpawnController.js"}];
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
    