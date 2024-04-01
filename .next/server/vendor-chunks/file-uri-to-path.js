/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/file-uri-to-path";
exports.ids = ["vendor-chunks/file-uri-to-path"];
exports.modules = {

/***/ "(ssr)/./node_modules/file-uri-to-path/index.js":
/*!************************************************!*\
  !*** ./node_modules/file-uri-to-path/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/**\n * Module dependencies.\n */\n\nvar sep = (__webpack_require__(/*! path */ \"path\").sep) || '/';\n\n/**\n * Module exports.\n */\n\nmodule.exports = fileUriToPath;\n\n/**\n * File URI to Path function.\n *\n * @param {String} uri\n * @return {String} path\n * @api public\n */\n\nfunction fileUriToPath (uri) {\n  if ('string' != typeof uri ||\n      uri.length <= 7 ||\n      'file://' != uri.substring(0, 7)) {\n    throw new TypeError('must pass in a file:// URI to convert to a file path');\n  }\n\n  var rest = decodeURI(uri.substring(7));\n  var firstSlash = rest.indexOf('/');\n  var host = rest.substring(0, firstSlash);\n  var path = rest.substring(firstSlash + 1);\n\n  // 2.  Scheme Definition\n  // As a special case, <host> can be the string \"localhost\" or the empty\n  // string; this is interpreted as \"the machine from which the URL is\n  // being interpreted\".\n  if ('localhost' == host) host = '';\n\n  if (host) {\n    host = sep + sep + host;\n  }\n\n  // 3.2  Drives, drive letters, mount points, file system root\n  // Drive letters are mapped into the top of a file URI in various ways,\n  // depending on the implementation; some applications substitute\n  // vertical bar (\"|\") for the colon after the drive letter, yielding\n  // \"file:///c|/tmp/test.txt\".  In some cases, the colon is left\n  // unchanged, as in \"file:///c:/tmp/test.txt\".  In other cases, the\n  // colon is simply omitted, as in \"file:///c/tmp/test.txt\".\n  path = path.replace(/^(.+)\\|/, '$1:');\n\n  // for Windows, we need to invert the path separators from what a URI uses\n  if (sep == '\\\\') {\n    path = path.replace(/\\//g, '\\\\');\n  }\n\n  if (/^.+\\:/.test(path)) {\n    // has Windows drive at beginning of path\n  } else {\n    // unix path…\n    path = sep + path;\n  }\n\n  return host + path;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmlsZS11cmktdG8tcGF0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsNkNBQW1COztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy8uL25vZGVfbW9kdWxlcy9maWxlLXVyaS10by1wYXRoL2luZGV4LmpzPzYyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHNlcCA9IHJlcXVpcmUoJ3BhdGgnKS5zZXAgfHwgJy8nO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZmlsZVVyaVRvUGF0aDtcblxuLyoqXG4gKiBGaWxlIFVSSSB0byBQYXRoIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEByZXR1cm4ge1N0cmluZ30gcGF0aFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmaWxlVXJpVG9QYXRoICh1cmkpIHtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiB1cmkgfHxcbiAgICAgIHVyaS5sZW5ndGggPD0gNyB8fFxuICAgICAgJ2ZpbGU6Ly8nICE9IHVyaS5zdWJzdHJpbmcoMCwgNykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHBhc3MgaW4gYSBmaWxlOi8vIFVSSSB0byBjb252ZXJ0IHRvIGEgZmlsZSBwYXRoJyk7XG4gIH1cblxuICB2YXIgcmVzdCA9IGRlY29kZVVSSSh1cmkuc3Vic3RyaW5nKDcpKTtcbiAgdmFyIGZpcnN0U2xhc2ggPSByZXN0LmluZGV4T2YoJy8nKTtcbiAgdmFyIGhvc3QgPSByZXN0LnN1YnN0cmluZygwLCBmaXJzdFNsYXNoKTtcbiAgdmFyIHBhdGggPSByZXN0LnN1YnN0cmluZyhmaXJzdFNsYXNoICsgMSk7XG5cbiAgLy8gMi4gIFNjaGVtZSBEZWZpbml0aW9uXG4gIC8vIEFzIGEgc3BlY2lhbCBjYXNlLCA8aG9zdD4gY2FuIGJlIHRoZSBzdHJpbmcgXCJsb2NhbGhvc3RcIiBvciB0aGUgZW1wdHlcbiAgLy8gc3RyaW5nOyB0aGlzIGlzIGludGVycHJldGVkIGFzIFwidGhlIG1hY2hpbmUgZnJvbSB3aGljaCB0aGUgVVJMIGlzXG4gIC8vIGJlaW5nIGludGVycHJldGVkXCIuXG4gIGlmICgnbG9jYWxob3N0JyA9PSBob3N0KSBob3N0ID0gJyc7XG5cbiAgaWYgKGhvc3QpIHtcbiAgICBob3N0ID0gc2VwICsgc2VwICsgaG9zdDtcbiAgfVxuXG4gIC8vIDMuMiAgRHJpdmVzLCBkcml2ZSBsZXR0ZXJzLCBtb3VudCBwb2ludHMsIGZpbGUgc3lzdGVtIHJvb3RcbiAgLy8gRHJpdmUgbGV0dGVycyBhcmUgbWFwcGVkIGludG8gdGhlIHRvcCBvZiBhIGZpbGUgVVJJIGluIHZhcmlvdXMgd2F5cyxcbiAgLy8gZGVwZW5kaW5nIG9uIHRoZSBpbXBsZW1lbnRhdGlvbjsgc29tZSBhcHBsaWNhdGlvbnMgc3Vic3RpdHV0ZVxuICAvLyB2ZXJ0aWNhbCBiYXIgKFwifFwiKSBmb3IgdGhlIGNvbG9uIGFmdGVyIHRoZSBkcml2ZSBsZXR0ZXIsIHlpZWxkaW5nXG4gIC8vIFwiZmlsZTovLy9jfC90bXAvdGVzdC50eHRcIi4gIEluIHNvbWUgY2FzZXMsIHRoZSBjb2xvbiBpcyBsZWZ0XG4gIC8vIHVuY2hhbmdlZCwgYXMgaW4gXCJmaWxlOi8vL2M6L3RtcC90ZXN0LnR4dFwiLiAgSW4gb3RoZXIgY2FzZXMsIHRoZVxuICAvLyBjb2xvbiBpcyBzaW1wbHkgb21pdHRlZCwgYXMgaW4gXCJmaWxlOi8vL2MvdG1wL3Rlc3QudHh0XCIuXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL14oLispXFx8LywgJyQxOicpO1xuXG4gIC8vIGZvciBXaW5kb3dzLCB3ZSBuZWVkIHRvIGludmVydCB0aGUgcGF0aCBzZXBhcmF0b3JzIGZyb20gd2hhdCBhIFVSSSB1c2VzXG4gIGlmIChzZXAgPT0gJ1xcXFwnKSB7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvL2csICdcXFxcJyk7XG4gIH1cblxuICBpZiAoL14uK1xcOi8udGVzdChwYXRoKSkge1xuICAgIC8vIGhhcyBXaW5kb3dzIGRyaXZlIGF0IGJlZ2lubmluZyBvZiBwYXRoXG4gIH0gZWxzZSB7XG4gICAgLy8gdW5peCBwYXRo4oCmXG4gICAgcGF0aCA9IHNlcCArIHBhdGg7XG4gIH1cblxuICByZXR1cm4gaG9zdCArIHBhdGg7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/file-uri-to-path/index.js\n");

/***/ })

};
;