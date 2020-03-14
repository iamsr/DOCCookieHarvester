// ==UserScript==
// @name         Drop o' Clock Cookie Harvester
// @namespace    https://dropoclock.io/
// @updateURL    https://github.com/FoonkG/DOCCookieHarvester.git/DocCookieHarvester.js
// @downloadURL  https://github.com/FoonkG/DOCCookieHarvester.git/DocCookieHarvester.js
// @version      0.0.1
// @description  Drop o' Clock Cookie Harvester, harvests cookies from Yeezysupply.
// @author       Original = Ryan, Modified for Drop o' Clock = FoonkG
// @include      *yeezysupply*
// @exclude      *stockx*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
	'use strict';

	const SITE_TO_URL = {
		'yeezysupply-dw': 'https://www.yeezysupply.com',
	};

	// flip and simplify urls
	const URL_TO_SITE = Object.entries(SITE_TO_URL).reduce(
		(obj, [key, val]) => (obj[val.replace('https://', '')] = key) && obj,
		{}
	);

	// md5 util
	!(function() {
		'use strict';

		function t(t) {
			if (t)
				(d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0),
					(this.blocks = d),
					(this.buffer8 = l);
			else if (a) {
				var r = new ArrayBuffer(68);
				(this.buffer8 = new Uint8Array(r)), (this.blocks = new Uint32Array(r));
			} else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			(this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0),
				(this.finalized = this.hashed = !1),
				(this.first = !0);
		}
		var r = 'input is invalid type',
			e = 'object' == typeof window,
			i = e ? window : {};
		i.JS_MD5_NO_WINDOW && (e = !1);
		var s = !e && 'object' == typeof self,
			h =
				!i.JS_MD5_NO_NODE_JS &&
				'object' == typeof process &&
				process.versions &&
				process.versions.node;
		h ? (i = global) : s && (i = self);
		var f =
				!i.JS_MD5_NO_COMMON_JS && 'object' == typeof module && module.exports,
			o = 'function' == typeof define && define.amd,
			a = !i.JS_MD5_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
			n = '0123456789abcdef'.split(''),
			u = [128, 32768, 8388608, -2147483648],
			y = [0, 8, 16, 24],
			c = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'],
			p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(
				''
			),
			d = [],
			l;
		if (a) {
			var A = new ArrayBuffer(68);
			(l = new Uint8Array(A)), (d = new Uint32Array(A));
		}
		(!i.JS_MD5_NO_NODE_JS && Array.isArray) ||
			(Array.isArray = function(t) {
				return '[object Array]' === Object.prototype.toString.call(t);
			}),
			!a ||
				(!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
				(ArrayBuffer.isView = function(t) {
					return (
						'object' == typeof t &&
						t.buffer &&
						t.buffer.constructor === ArrayBuffer
					);
				});
		var b = function(r) {
				return function(e) {
					return new t(!0).update(e)[r]();
				};
			},
			v = function() {
				var r = b('hex');
				h && (r = w(r)),
					(r.create = function() {
						return new t();
					}),
					(r.update = function(t) {
						return r.create().update(t);
					});
				for (var e = 0; e < c.length; ++e) {
					var i = c[e];
					r[i] = b(i);
				}
				return r;
			},
			w = function(t) {
				var e = eval("require('crypto')"),
					i = eval("require('buffer').Buffer"),
					s = function(s) {
						if ('string' == typeof s)
							return e
								.createHash('md5')
								.update(s, 'utf8')
								.digest('hex');
						if (null === s || void 0 === s) throw r;
						return (
							s.constructor === ArrayBuffer && (s = new Uint8Array(s)),
							Array.isArray(s) || ArrayBuffer.isView(s) || s.constructor === i
								? e
										.createHash('md5')
										.update(new i(s))
										.digest('hex')
								: t(s)
						);
					};
				return s;
			};
		(t.prototype.update = function(t) {
			if (!this.finalized) {
				var e,
					i = typeof t;
				if ('string' !== i) {
					if ('object' !== i) throw r;
					if (null === t) throw r;
					if (a && t.constructor === ArrayBuffer) t = new Uint8Array(t);
					else if (!(Array.isArray(t) || (a && ArrayBuffer.isView(t)))) throw r;
					e = !0;
				}
				for (
					var s, h, f = 0, o = t.length, n = this.blocks, u = this.buffer8;
					f < o;

				) {
					if (
						(this.hashed &&
							((this.hashed = !1),
							(n[0] = n[16]),
							(n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0)),
						e)
					)
						if (a) for (h = this.start; f < o && h < 64; ++f) u[h++] = t[f];
						else
							for (h = this.start; f < o && h < 64; ++f)
								n[h >> 2] |= t[f] << y[3 & h++];
					else if (a)
						for (h = this.start; f < o && h < 64; ++f)
							(s = t.charCodeAt(f)) < 128
								? (u[h++] = s)
								: s < 2048
								? ((u[h++] = 192 | (s >> 6)), (u[h++] = 128 | (63 & s)))
								: s < 55296 || s >= 57344
								? ((u[h++] = 224 | (s >> 12)),
								  (u[h++] = 128 | ((s >> 6) & 63)),
								  (u[h++] = 128 | (63 & s)))
								: ((s =
										65536 + (((1023 & s) << 10) | (1023 & t.charCodeAt(++f)))),
								  (u[h++] = 240 | (s >> 18)),
								  (u[h++] = 128 | ((s >> 12) & 63)),
								  (u[h++] = 128 | ((s >> 6) & 63)),
								  (u[h++] = 128 | (63 & s)));
					else
						for (h = this.start; f < o && h < 64; ++f)
							(s = t.charCodeAt(f)) < 128
								? (n[h >> 2] |= s << y[3 & h++])
								: s < 2048
								? ((n[h >> 2] |= (192 | (s >> 6)) << y[3 & h++]),
								  (n[h >> 2] |= (128 | (63 & s)) << y[3 & h++]))
								: s < 55296 || s >= 57344
								? ((n[h >> 2] |= (224 | (s >> 12)) << y[3 & h++]),
								  (n[h >> 2] |= (128 | ((s >> 6) & 63)) << y[3 & h++]),
								  (n[h >> 2] |= (128 | (63 & s)) << y[3 & h++]))
								: ((s =
										65536 + (((1023 & s) << 10) | (1023 & t.charCodeAt(++f)))),
								  (n[h >> 2] |= (240 | (s >> 18)) << y[3 & h++]),
								  (n[h >> 2] |= (128 | ((s >> 12) & 63)) << y[3 & h++]),
								  (n[h >> 2] |= (128 | ((s >> 6) & 63)) << y[3 & h++]),
								  (n[h >> 2] |= (128 | (63 & s)) << y[3 & h++]));
					(this.lastByteIndex = h),
						(this.bytes += h - this.start),
						h >= 64
							? ((this.start = h - 64), this.hash(), (this.hashed = !0))
							: (this.start = h);
				}
				return (
					this.bytes > 4294967295 &&
						((this.hBytes += (this.bytes / 4294967296) << 0),
						(this.bytes = this.bytes % 4294967296)),
					this
				);
			}
		}),
			(t.prototype.finalize = function() {
				if (!this.finalized) {
					this.finalized = !0;
					var t = this.blocks,
						r = this.lastByteIndex;
					(t[r >> 2] |= u[3 & r]),
						r >= 56 &&
							(this.hashed || this.hash(),
							(t[0] = t[16]),
							(t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0)),
						(t[14] = this.bytes << 3),
						(t[15] = (this.hBytes << 3) | (this.bytes >>> 29)),
						this.hash();
				}
			}),
			(t.prototype.hash = function() {
				var t,
					r,
					e,
					i,
					s,
					h,
					f = this.blocks;
				this.first
					? (r =
							((((r =
								((t =
									((((t = f[0] - 680876937) << 7) | (t >>> 25)) - 271733879) <<
									0) ^
									((e =
										((((e =
											(-271733879 ^
												((i =
													((((i =
														(-1732584194 ^ (2004318071 & t)) +
														f[1] -
														117830708) <<
														12) |
														(i >>> 20)) +
														t) <<
													0) &
													(-271733879 ^ t))) +
											f[2] -
											1126478375) <<
											17) |
											(e >>> 15)) +
											i) <<
										0) &
										(i ^ t))) +
								f[3] -
								1316259209) <<
								22) |
								(r >>> 10)) +
								e) <<
							0)
					: ((t = this.h0),
					  (r = this.h1),
					  (e = this.h2),
					  (r =
							((((r +=
								((t =
									((((t +=
										((i = this.h3) ^ (r & (e ^ i))) + f[0] - 680876936) <<
										7) |
										(t >>> 25)) +
										r) <<
									0) ^
									((e =
										((((e +=
											(r ^
												((i =
													((((i += (e ^ (t & (r ^ e))) + f[1] - 389564586) <<
														12) |
														(i >>> 20)) +
														t) <<
													0) &
													(t ^ r))) +
											f[2] +
											606105819) <<
											17) |
											(e >>> 15)) +
											i) <<
										0) &
										(i ^ t))) +
								f[3] -
								1044525330) <<
								22) |
								(r >>> 10)) +
								e) <<
							0)),
					(r =
						((((r +=
							((t =
								((((t += (i ^ (r & (e ^ i))) + f[4] - 176418897) << 7) |
									(t >>> 25)) +
									r) <<
								0) ^
								((e =
									((((e +=
										(r ^
											((i =
												((((i += (e ^ (t & (r ^ e))) + f[5] + 1200080426) <<
													12) |
													(i >>> 20)) +
													t) <<
												0) &
												(t ^ r))) +
										f[6] -
										1473231341) <<
										17) |
										(e >>> 15)) +
										i) <<
									0) &
									(i ^ t))) +
							f[7] -
							45705983) <<
							22) |
							(r >>> 10)) +
							e) <<
						0),
					(r =
						((((r +=
							((t =
								((((t += (i ^ (r & (e ^ i))) + f[8] + 1770035416) << 7) |
									(t >>> 25)) +
									r) <<
								0) ^
								((e =
									((((e +=
										(r ^
											((i =
												((((i += (e ^ (t & (r ^ e))) + f[9] - 1958414417) <<
													12) |
													(i >>> 20)) +
													t) <<
												0) &
												(t ^ r))) +
										f[10] -
										42063) <<
										17) |
										(e >>> 15)) +
										i) <<
									0) &
									(i ^ t))) +
							f[11] -
							1990404162) <<
							22) |
							(r >>> 10)) +
							e) <<
						0),
					(r =
						((((r +=
							((t =
								((((t += (i ^ (r & (e ^ i))) + f[12] + 1804603682) << 7) |
									(t >>> 25)) +
									r) <<
								0) ^
								((e =
									((((e +=
										(r ^
											((i =
												((((i += (e ^ (t & (r ^ e))) + f[13] - 40341101) <<
													12) |
													(i >>> 20)) +
													t) <<
												0) &
												(t ^ r))) +
										f[14] -
										1502002290) <<
										17) |
										(e >>> 15)) +
										i) <<
									0) &
									(i ^ t))) +
							f[15] +
							1236535329) <<
							22) |
							(r >>> 10)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										(e &
											((t =
												((((t += (e ^ (i & (r ^ e))) + f[1] - 165796510) << 5) |
													(t >>> 27)) +
													r) <<
												0) ^
												r))) +
									f[6] -
									1069501632) <<
									9) |
									(i >>> 23)) +
									t) <<
								0) ^
								(t &
									((e =
										((((e += (t ^ (r & (i ^ t))) + f[11] + 643717713) << 14) |
											(e >>> 18)) +
											i) <<
										0) ^
										i))) +
							f[0] -
							373897302) <<
							20) |
							(r >>> 12)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										(e &
											((t =
												((((t += (e ^ (i & (r ^ e))) + f[5] - 701558691) << 5) |
													(t >>> 27)) +
													r) <<
												0) ^
												r))) +
									f[10] +
									38016083) <<
									9) |
									(i >>> 23)) +
									t) <<
								0) ^
								(t &
									((e =
										((((e += (t ^ (r & (i ^ t))) + f[15] - 660478335) << 14) |
											(e >>> 18)) +
											i) <<
										0) ^
										i))) +
							f[4] -
							405537848) <<
							20) |
							(r >>> 12)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										(e &
											((t =
												((((t += (e ^ (i & (r ^ e))) + f[9] + 568446438) << 5) |
													(t >>> 27)) +
													r) <<
												0) ^
												r))) +
									f[14] -
									1019803690) <<
									9) |
									(i >>> 23)) +
									t) <<
								0) ^
								(t &
									((e =
										((((e += (t ^ (r & (i ^ t))) + f[3] - 187363961) << 14) |
											(e >>> 18)) +
											i) <<
										0) ^
										i))) +
							f[8] +
							1163531501) <<
							20) |
							(r >>> 12)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										(e &
											((t =
												((((t += (e ^ (i & (r ^ e))) + f[13] - 1444681467) <<
													5) |
													(t >>> 27)) +
													r) <<
												0) ^
												r))) +
									f[2] -
									51403784) <<
									9) |
									(i >>> 23)) +
									t) <<
								0) ^
								(t &
									((e =
										((((e += (t ^ (r & (i ^ t))) + f[7] + 1735328473) << 14) |
											(e >>> 18)) +
											i) <<
										0) ^
										i))) +
							f[12] -
							1926607734) <<
							20) |
							(r >>> 12)) +
							e) <<
						0),
					(r =
						((((r +=
							((h =
								(i =
									((((i +=
										((s = r ^ e) ^
											(t =
												((((t += (s ^ i) + f[5] - 378558) << 4) | (t >>> 28)) +
													r) <<
												0)) +
										f[8] -
										2022574463) <<
										11) |
										(i >>> 21)) +
										t) <<
									0) ^ t) ^
								(e =
									((((e += (h ^ r) + f[11] + 1839030562) << 16) | (e >>> 16)) +
										i) <<
									0)) +
							f[14] -
							35309556) <<
							23) |
							(r >>> 9)) +
							e) <<
						0),
					(r =
						((((r +=
							((h =
								(i =
									((((i +=
										((s = r ^ e) ^
											(t =
												((((t += (s ^ i) + f[1] - 1530992060) << 4) |
													(t >>> 28)) +
													r) <<
												0)) +
										f[4] +
										1272893353) <<
										11) |
										(i >>> 21)) +
										t) <<
									0) ^ t) ^
								(e =
									((((e += (h ^ r) + f[7] - 155497632) << 16) | (e >>> 16)) +
										i) <<
									0)) +
							f[10] -
							1094730640) <<
							23) |
							(r >>> 9)) +
							e) <<
						0),
					(r =
						((((r +=
							((h =
								(i =
									((((i +=
										((s = r ^ e) ^
											(t =
												((((t += (s ^ i) + f[13] + 681279174) << 4) |
													(t >>> 28)) +
													r) <<
												0)) +
										f[0] -
										358537222) <<
										11) |
										(i >>> 21)) +
										t) <<
									0) ^ t) ^
								(e =
									((((e += (h ^ r) + f[3] - 722521979) << 16) | (e >>> 16)) +
										i) <<
									0)) +
							f[6] +
							76029189) <<
							23) |
							(r >>> 9)) +
							e) <<
						0),
					(r =
						((((r +=
							((h =
								(i =
									((((i +=
										((s = r ^ e) ^
											(t =
												((((t += (s ^ i) + f[9] - 640364487) << 4) |
													(t >>> 28)) +
													r) <<
												0)) +
										f[12] -
										421815835) <<
										11) |
										(i >>> 21)) +
										t) <<
									0) ^ t) ^
								(e =
									((((e += (h ^ r) + f[15] + 530742520) << 16) | (e >>> 16)) +
										i) <<
									0)) +
							f[2] -
							995338651) <<
							23) |
							(r >>> 9)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										((t =
											((((t += (e ^ (r | ~i)) + f[0] - 198630844) << 6) |
												(t >>> 26)) +
												r) <<
											0) |
											~e)) +
									f[7] +
									1126891415) <<
									10) |
									(i >>> 22)) +
									t) <<
								0) ^
								((e =
									((((e += (t ^ (i | ~r)) + f[14] - 1416354905) << 15) |
										(e >>> 17)) +
										i) <<
									0) |
									~t)) +
							f[5] -
							57434055) <<
							21) |
							(r >>> 11)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										((t =
											((((t += (e ^ (r | ~i)) + f[12] + 1700485571) << 6) |
												(t >>> 26)) +
												r) <<
											0) |
											~e)) +
									f[3] -
									1894986606) <<
									10) |
									(i >>> 22)) +
									t) <<
								0) ^
								((e =
									((((e += (t ^ (i | ~r)) + f[10] - 1051523) << 15) |
										(e >>> 17)) +
										i) <<
									0) |
									~t)) +
							f[1] -
							2054922799) <<
							21) |
							(r >>> 11)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										((t =
											((((t += (e ^ (r | ~i)) + f[8] + 1873313359) << 6) |
												(t >>> 26)) +
												r) <<
											0) |
											~e)) +
									f[15] -
									30611744) <<
									10) |
									(i >>> 22)) +
									t) <<
								0) ^
								((e =
									((((e += (t ^ (i | ~r)) + f[6] - 1560198380) << 15) |
										(e >>> 17)) +
										i) <<
									0) |
									~t)) +
							f[13] +
							1309151649) <<
							21) |
							(r >>> 11)) +
							e) <<
						0),
					(r =
						((((r +=
							((i =
								((((i +=
									(r ^
										((t =
											((((t += (e ^ (r | ~i)) + f[4] - 145523070) << 6) |
												(t >>> 26)) +
												r) <<
											0) |
											~e)) +
									f[11] -
									1120210379) <<
									10) |
									(i >>> 22)) +
									t) <<
								0) ^
								((e =
									((((e += (t ^ (i | ~r)) + f[2] + 718787259) << 15) |
										(e >>> 17)) +
										i) <<
									0) |
									~t)) +
							f[9] -
							343485551) <<
							21) |
							(r >>> 11)) +
							e) <<
						0),
					this.first
						? ((this.h0 = (t + 1732584193) << 0),
						  (this.h1 = (r - 271733879) << 0),
						  (this.h2 = (e - 1732584194) << 0),
						  (this.h3 = (i + 271733878) << 0),
						  (this.first = !1))
						: ((this.h0 = (this.h0 + t) << 0),
						  (this.h1 = (this.h1 + r) << 0),
						  (this.h2 = (this.h2 + e) << 0),
						  (this.h3 = (this.h3 + i) << 0));
			}),
			(t.prototype.hex = function() {
				this.finalize();
				var t = this.h0,
					r = this.h1,
					e = this.h2,
					i = this.h3;
				return (
					n[(t >> 4) & 15] +
					n[15 & t] +
					n[(t >> 12) & 15] +
					n[(t >> 8) & 15] +
					n[(t >> 20) & 15] +
					n[(t >> 16) & 15] +
					n[(t >> 28) & 15] +
					n[(t >> 24) & 15] +
					n[(r >> 4) & 15] +
					n[15 & r] +
					n[(r >> 12) & 15] +
					n[(r >> 8) & 15] +
					n[(r >> 20) & 15] +
					n[(r >> 16) & 15] +
					n[(r >> 28) & 15] +
					n[(r >> 24) & 15] +
					n[(e >> 4) & 15] +
					n[15 & e] +
					n[(e >> 12) & 15] +
					n[(e >> 8) & 15] +
					n[(e >> 20) & 15] +
					n[(e >> 16) & 15] +
					n[(e >> 28) & 15] +
					n[(e >> 24) & 15] +
					n[(i >> 4) & 15] +
					n[15 & i] +
					n[(i >> 12) & 15] +
					n[(i >> 8) & 15] +
					n[(i >> 20) & 15] +
					n[(i >> 16) & 15] +
					n[(i >> 28) & 15] +
					n[(i >> 24) & 15]
				);
			}),
			(t.prototype.toString = t.prototype.hex),
			(t.prototype.digest = function() {
				this.finalize();
				var t = this.h0,
					r = this.h1,
					e = this.h2,
					i = this.h3;
				return [
					255 & t,
					(t >> 8) & 255,
					(t >> 16) & 255,
					(t >> 24) & 255,
					255 & r,
					(r >> 8) & 255,
					(r >> 16) & 255,
					(r >> 24) & 255,
					255 & e,
					(e >> 8) & 255,
					(e >> 16) & 255,
					(e >> 24) & 255,
					255 & i,
					(i >> 8) & 255,
					(i >> 16) & 255,
					(i >> 24) & 255
				];
			}),
			(t.prototype.array = t.prototype.digest),
			(t.prototype.arrayBuffer = function() {
				this.finalize();
				var t = new ArrayBuffer(16),
					r = new Uint32Array(t);
				return (
					(r[0] = this.h0),
					(r[1] = this.h1),
					(r[2] = this.h2),
					(r[3] = this.h3),
					t
				);
			}),
			(t.prototype.buffer = t.prototype.arrayBuffer),
			(t.prototype.base64 = function() {
				for (var t, r, e, i = '', s = this.array(), h = 0; h < 15; )
					(t = s[h++]),
						(r = s[h++]),
						(e = s[h++]),
						(i +=
							p[t >>> 2] +
							p[63 & ((t << 4) | (r >>> 4))] +
							p[63 & ((r << 2) | (e >>> 6))] +
							p[63 & e]);
				return (t = s[h]), (i += p[t >>> 2] + p[(t << 4) & 63] + '==');
			});
		var _ = v();
		f
			? (module.exports = _)
			: ((i.md5 = _),
			  o &&
					define(function() {
						return _;
					}));
	})();

	const panelHtml = `<div id="cookiePanelDoc" style="position: fixed; z-index: 99999999; left: 5px; top: 5px; background-color: #1b1728; border: 3px solid #502883; padding: 15px; color: white; border-radius: 10px; font-family: Arial, Helvetica, sans-serif; font-weight: bold;"><h3 style="margin-bottom:10px; margin-top: 0px">Drop o' Clock Cookie Harvester</h3>Cookie exists: <span id="cookieExistsDoc" style="color: red;float:right;">false</span> <br /> Valid cookie: <span id="cookieValidDoc" style="color: red; float:right;">false</span> <br /><br /> Cookies harvested: <span id="cookieHarvestCntDoc" style="font-size:14pt;float:right;">0</span><br /> <br /> <button id="clearCookieJarDoc" style="background-color: #f1707a; color: white; padding: 5px; border: 1px solid white; border-radius: 5px; margin-top: 5px; font-size: 10pt; margin-right: 3px;">Clear Cookie Jar</button> <button id="saveCookieJarDoc" style="background-color: #28a745; color: white; padding: 5px; border: 1px solid white; border-radius: 5px; margin-top: 5px; font-size: 10pt; float: right;">Save</button> <a id="saveCookieJarDoc-dl-anchor" style="display: none;"></a></div>`;
	document.getElementsByTagName('body')[0].innerHTML += panelHtml;

	function getSavedCookies(site) {
		let cookies = GM_getValue('savedCookies', {});
		return (site && cookies[site]) || cookies;
	}

	function clearSavedCookies() {
		if (confirm('Clear cookies?')) GM_setValue('savedCookies', {});
	}

	function addCookie(value, site) {
		let cookies = getSavedCookies();
		if (!cookies.hashes) cookies.hashes = [];
		let hash = md5(value);
		if (cookies.hashes.includes(hash)) return false;

		if (!cookies[site]) cookies[site] = [];
		cookies[site].push({
			cookie: value,
			timestamp: Date.now()
		});
		cookies.hashes.push(hash);
		GM_setValue('savedCookies', cookies);
		return true;
	}

	function getCookie() {
		let text = document.cookie
			.split('; ')
			.filter(cookie => cookie.includes('_abck'))
			.pop();
		if (!text) return text;
		return text.split(/\=(.+)/).reduce((obj, part, i) => {
			if (i === 0) obj.key = part;
			if (i === 1) obj.val = part;
			return obj;
		}, {});
	}

	function clearCookies() {
		var cookies = document.cookie.split('; ');
		for (var c = 0; c < cookies.length; c++) {
			var d = window.location.hostname.split('.');
			while (d.length > 0) {
				var cookieBase =
					encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) +
					'=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
					d.join('.') +
					' ;path=';
				var p = location.pathname.split('/');
				document.cookie = cookieBase + '/';
				while (p.length > 0) {
					document.cookie = cookieBase + p.join('/');
					p.pop();
				}
				d.shift();
			}
		}
	}

	let dontRefresh = false;

	function download(data) {
		dontRefresh = true;
		const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
		let anchor = document.getElementById('saveCookieJarDoc-dl-anchor');
		anchor.setAttribute('href', dataStr);
		anchor.setAttribute('download', `cookies.json`);
		anchor.click();
		dontRefresh = false;
	}

	function getCurrentSite() {
		return URL_TO_SITE[location.hostname];
	}

	document.getElementById('saveCookieJarDoc').addEventListener('click', e => {
		e.preventDefault();
		let cookies = getSavedCookies();
		delete cookies.hashes;
		download(JSON.stringify(cookies));
	});

	document.getElementById('clearCookieJarDoc').addEventListener('click', e => {
		e.preventDefault();
		clearSavedCookies();
	});

	document.addEventListener('keypress', e => {
		if (e.shiftKey) {
			console.log(e.key);
			if (e.key === 'S') {
				dontRefresh = true;
				document.getElementById('cookiePanelDoc').style.border = 'red';
			} else if (e.key === 'C') {
				dontRefresh = false;
				document.getElementById('cookiePanelDoc').style.border =
					'3px solid #502883';
			}
		}
	});

	function isValid({ val }) {
		const href = document.location.href;
		return (
			(href.includes('footpatrol.com') && !val.includes('==')) ||
			(href.includes('size.co.uk') && val.includes('=~-1')) ||
			(href.includes('yeezysupply') && val.includes('==')) ||
			(href.includes('finishline.com') && !val.includes('==')) ||
			val.includes('~0~')
		);
	}

	setInterval(() => {
		let site = getCurrentSite();
		let saved = getSavedCookies(site);
		document.getElementById('cookieHarvestCntDoc').innerHTML =
			(saved && saved.length) || 0;
		let cookie = getCookie();
		if (cookie && cookie.key && cookie.key.includes('_abck')) {
			document.getElementById('cookieExistsDoc').innerHTML = 'true';
			document.getElementById('cookieExistsDoc').style.color = 'green';
			if (cookie.val && isValid(cookie)) {
				document.getElementById('cookieValidDoc').innerHTML = 'true';
				document.getElementById('cookieValidDoc').style.color = 'green';
				if (dontRefresh) return;
				let res = addCookie(cookie.val, site);
				if (res) {
					clearCookies();
					location.reload();
				}
			} else {
				document.getElementById('cookieValidDoc').innerHTML = 'false';
				document.getElementById('cookieValidDoc').style.color = 'red';
			}
		} else {
			document.getElementById('cookieExistsDoc').innerHTML = 'false';
			document.getElementById('cookieExistsDoc').style.color = 'red';
		}
	}, 1000);
})();
