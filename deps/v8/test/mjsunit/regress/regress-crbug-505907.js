// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --harmony-proxies

try {
  var p = Proxy.create({ getPropertyDescriptor: function() { return [] } });
  var o = Object.create(p);
  with (o) { unresolved_name() }
} catch(e) {
}
