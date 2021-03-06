/**
Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

// This function is a wrapper around jQuery.ajax():
// http://api.jquery.com/jQuery.ajax/. The passed settings object is a set of
// key/value pairs that configure the URI request
function getUri(settings) {
  jQuery.ajax(settings);
}

// This function gets a JSON struct from the passed url, and calls success if
// the request succeeds. It uses the above getUri() function to perform the
// request.
function getJSON(url, success) {
  getUri({url: url, success: function(text) {
    if (success) {
      success(text);
    }
  }});
}
