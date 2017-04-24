
var Music163 = {};
Music163.Send = function (index, count) {
    var bd = NEJ.P,
        cg = NEJ.O,
        cz = NEJ.F,
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bL = bd("nej.ut"),
        bn = bd("nm.x"),
        bs = bd("nm.d"),
        bc,
        bO;
    bs.iR = NEJ.C();
    bc = bs.iR.bT(bL.bft);
    bc.dK = function () {
        var Rs = location.protocol + "//" + location.host;
        var cqX = function (cF, bl) {
            var cI = { conf: {}, data: {}, urls: [] };
            bm.cr(cF,
                function (bP, bv, bk) {
                    var cl = bs.bD(bP);
                    if (!cl) return;
                    var bfz = bGO(cl.url, bl[bP]);
                    cI.urls.push(bfz);
                    cI.conf[bfz] = cl;
                    cI.data[bfz] = JSON.stringify(bl[bP] == null ? "" : bl[bP])
                });
            return cI
        };
        var bGO = function (ce, bl) { return ce.replace(/\{(.*?)\}/gi, function ($1, $2) { return bl[$2] || $1 }) };
        var bGW = function (cl, bf, be) {
            bj.bG(window, "requesterror", be);
            if (!!be.stopped) return;
            var KT = cl.onerror || bf.onerror;
            if (bm.gO(KT)) {
                this.bG(KT, be, bf)
            } else {
                (KT || cz).call(this, be, bf)
            }
            var be = { result: be, option: bf };
            this.bG("onerror", be);
            if (!be.stopped) (cl.onmessage || cz).call(this, be.result.code, be.result)
        };
        var bHc = function (bV, cl, bf) {
            var bo = bV;
            if (bm.hF(cl.format)) {
                bo = cl.format.call(this, bV, bf)
            }
            return bo
        };
        var yC = function (bV, cl, bf, vX) {
            if (bm.hF(cl.beforeload)) {
                cl.beforeload.call(this, bV, bf, cl)
            }
            if (bV && bV.code != null && bV.code != 200) {
                bGW.call(this,
                    cl,
                    bf,
                    { key: bf.key, code: bV.code, message: bV.message || "", captchaId: bV.captchaId, ext: bV });
                return
            }
            var bo = bV;
            if (!vX) {
                bo = bHc.call(this, bV, cl, bf)
            } else if (bm.hF(cl.format)) {
                var bfD = [];
                bm.cr(vX.urls, function (ce) { bfD.push(bHc.call(this, bV[ce], vX.conf[ce], bf)) }, this);
                bfD.push(bf);
                bo = cl.format.apply(this, bfD)
            }
            var vp = cl.onload || bf.onload, bHl = cl.finaly || bf.finaly || cz;
            if (bm.gO(vp)) {
                bHl.call(this, this.bG(vp, bo), bf)
            } else {
                bHl.call(this, (vp || cz).call(this, bo), bf)
            }
        };
        var BF = function (cl, bf, dh) {
            bGW.call(this, cl, bf, { key: bf.key, code: dh.code || -1, message: dh.message || "" })
        };
        return function (cl, bf) {
            if (bm.gO(cl)) {
                cl = bs.bD(cl)
            }
            delete bf.value;
            (cl.filter || cz).call(this, bf, cl);
            var bV = bf.value;
            if (!!bV) {
                yC.call(this, bV, cl, bf);
                return
            }
            var ce,
                bl = bf.data || cg,
                zt = {
                    cookie: !0,
                    type: cl.rtype || "json",
                    method: cl.type || "POST",
                    onerror: BF.bi(this, cl, bf),
                    noescape: cl.noescape
                };
            if (bm.fU(cl.url)) {
                var vX = cqX(cl.url, bl);
                ce = Rs + "/api/batch";
                zt.data = bm.eH(vX.data);
                zt.onload = yC.fE(this, cl, bf, vX);
                zt.headers = { "batch-method": "POST" };
                delete vX.data
            } else {
                var mM = cl.url.indexOf(":") < 0 ? Rs : "";
                ce = bGO(mM + cl.url, bl);
                zt.data = bm.eH(bf.data);
                zt.onload = yC.fE(this, cl, bf)
            }
            if (zt.method == "GET") zt.query = zt.data;
            return bA.cE(ce, zt)
        }
    }();
    bc.ES = function () {
        var hx = /^get|list|pull$/i;
        return function (bHw, bf) {
            var bP = bf.key, cl = bs.bD(bP.split("-")[0] + "-" + bHw);
            if (hx.test(bHw) && bP.indexOf("post-") < 0) cl.type = "GET";
            this.dK(cl, bf)
        }
    }();
    bc.ctL = function (bP, bk) {
        var dO = bk.length;
        this.bfc({ key: bP, offset: 0, limit: dO + 1 }, { list: bk, total: dO })
    };
    bc.Yi = function (bf) { this.ES("list", bf) };
    bc.bfv = function (bf) { this.ES("get", bf) };
    bc.bGh = function (bf) { this.ES("pull", bf) };
    bc.bFQ = function (bf) { this.ES("add", bf) };
    bc.Yf = function (bf) { this.ES("del", bf) };
    bc.Yd = function (bf) { this.ES("update", bf) };
    bc.cqS = function (bu) { this.Db(bu) };
    bL.he.bH({ element: window, event: "requesterror" });

    var canRun = true;
    this.RunOrStop = function () {
        canRun = !canRun;
        return canRun;
    }
    var _index = index;
    var _count = count;
    this.Start = function () {
        console.log("↖起飞↗");
        console.log("By XA");
        for (var songId = _index; songId < _count; songId++ , _index++) {
            if (canRun) {
                if (songId % 200 === 0) {
                    console.log("正在刷第[" + (songId - index)+ "]首歌。");
                }
                var info = { "type": "song", "wifi": 0, "download": 0, "id": songId, "time": 600, "end": "ui", "source": "list", "sourceId": "576900073" };
                bc.dK("bi-log", {
                    data: {
                        logs: JSON.stringify([{
                            action: "play",
                            json: info
                        }])
                    }
                });
            }
            else {
                return _index;
            }
        }
    }
}


var index = 25730500;//歌曲起始ID
var count = index + 10000;//10000是刷歌数量

var m163 = new Music163.Send(index, count);
m163.Start();
