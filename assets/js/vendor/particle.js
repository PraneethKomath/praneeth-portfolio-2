function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, i) {
    return t + t + a + a + i + i;
  });
  e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return e
    ? {
        r: parseInt(e[1], 16),
        g: parseInt(e[2], 16),
        b: parseInt(e[3], 16),
      }
    : null;
}
function clamp(e, t, a) {
  return Math.min(Math.max(e, t), a);
}
function isInArray(e, t) {
  return -1 < t.indexOf(e);
}
var pJS = function (e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el"),
      v =
        ((this.pJS = {
          canvas: {
            el: a,
            w: a.offsetWidth,
            h: a.offsetHeight,
          },
          particles: {
            number: {
              value: 400,
              density: {
                enable: !0,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ff0000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: !1,
              anim: {
                enable: !1,
                speed: 2,
                opacity_min: 0,
                sync: !1,
              },
            },
            size: {
              value: 20,
              random: !1,
              anim: {
                enable: !1,
                speed: 20,
                size_min: 0,
                sync: !1,
              },
            },
            line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                enable: !1,
                rotateX: 3e3,
                rotateY: 3e3,
              },
            },
            array: [],
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !0,
                mode: "grab",
              },
              onclick: {
                enable: !0,
                mode: "push",
              },
              resize: !0,
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 80,
                duration: 0.4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
            mouse: {},
          },
          retina_detect: !1,
          fn: {
            interact: {},
            modes: {},
            vendors: {},
          },
          tmp: {},
        }),
        this.pJS);
    t && Object.deepExtend(v, t),
      (v.tmp.obj = {
        size_value: v.particles.size.value,
        size_anim_speed: v.particles.size.anim.speed,
        move_speed: v.particles.move.speed,
        line_linked_distance: v.particles.line_linked.distance,
        line_linked_width: v.particles.line_linked.width,
        mode_grab_distance: v.interactivity.modes.grab.distance,
        mode_bubble_distance: v.interactivity.modes.bubble.distance,
        mode_bubble_size: v.interactivity.modes.bubble.size,
        mode_repulse_distance: v.interactivity.modes.repulse.distance,
      }),
      (v.fn.retinaInit = function () {
        v.retina_detect && 1 < window.devicePixelRatio
          ? ((v.canvas.pxratio = window.devicePixelRatio), (v.tmp.retina = !0))
          : ((v.canvas.pxratio = 1), (v.tmp.retina = !1)),
          (v.canvas.w = v.canvas.el.offsetWidth * v.canvas.pxratio),
          (v.canvas.h = v.canvas.el.offsetHeight * v.canvas.pxratio),
          (v.particles.size.value = v.tmp.obj.size_value * v.canvas.pxratio),
          (v.particles.size.anim.speed =
            v.tmp.obj.size_anim_speed * v.canvas.pxratio),
          (v.particles.move.speed = v.tmp.obj.move_speed * v.canvas.pxratio),
          (v.particles.line_linked.distance =
            v.tmp.obj.line_linked_distance * v.canvas.pxratio),
          (v.interactivity.modes.grab.distance =
            v.tmp.obj.mode_grab_distance * v.canvas.pxratio),
          (v.interactivity.modes.bubble.distance =
            v.tmp.obj.mode_bubble_distance * v.canvas.pxratio),
          (v.particles.line_linked.width =
            v.tmp.obj.line_linked_width * v.canvas.pxratio),
          (v.interactivity.modes.bubble.size =
            v.tmp.obj.mode_bubble_size * v.canvas.pxratio),
          (v.interactivity.modes.repulse.distance =
            v.tmp.obj.mode_repulse_distance * v.canvas.pxratio);
      }),
      (v.fn.canvasInit = function () {
        v.canvas.ctx = v.canvas.el.getContext("2d");
      }),
      (v.fn.canvasSize = function () {
        (v.canvas.el.width = v.canvas.w),
          (v.canvas.el.height = v.canvas.h),
          v &&
            v.interactivity.events.resize &&
            window.addEventListener("resize", function () {
              (v.canvas.w = v.canvas.el.offsetWidth),
                (v.canvas.h = v.canvas.el.offsetHeight),
                v.tmp.retina &&
                  ((v.canvas.w *= v.canvas.pxratio),
                  (v.canvas.h *= v.canvas.pxratio)),
                (v.canvas.el.width = v.canvas.w),
                (v.canvas.el.height = v.canvas.h),
                v.particles.move.enable ||
                  (v.fn.particlesEmpty(),
                  v.fn.particlesCreate(),
                  v.fn.particlesDraw(),
                  v.fn.vendors.densityAutoParticles()),
                v.fn.vendors.densityAutoParticles();
            });
      }),
      (v.fn.canvasPaint = function () {
        v.canvas.ctx.fillRect(0, 0, v.canvas.w, v.canvas.h);
      }),
      (v.fn.canvasClear = function () {
        v.canvas.ctx.clearRect(0, 0, v.canvas.w, v.canvas.h);
      }),
      (v.fn.particle = function (e, t, a) {
        (this.radius =
          (v.particles.size.random ? Math.random() : 1) *
          v.particles.size.value),
          v.particles.size.anim.enable &&
            ((this.size_status = !1),
            (this.vs = v.particles.size.anim.speed / 100),
            v.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
          (this.x = a ? a.x : Math.random() * v.canvas.w),
          (this.y = a ? a.y : Math.random() * v.canvas.h),
          this.x > v.canvas.w - 2 * this.radius
            ? (this.x = this.x - this.radius)
            : this.x < 2 * this.radius && (this.x = this.x + this.radius),
          this.y > v.canvas.h - 2 * this.radius
            ? (this.y = this.y - this.radius)
            : this.y < 2 * this.radius && (this.y = this.y + this.radius),
          v.particles.move.bounce && v.fn.vendors.checkOverlap(this, a),
          (this.color = {}),
          "object" == typeof e.value
            ? e.value instanceof Array
              ? ((a =
                  e.value[
                    Math.floor(Math.random() * v.particles.color.value.length)
                  ]),
                (this.color.rgb = hexToRgb(a)))
              : (null != e.value.r &&
                  null != e.value.g &&
                  null != e.value.b &&
                  (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b,
                  }),
                null != e.value.h &&
                  null != e.value.s &&
                  null != e.value.l &&
                  (this.color.hsl = {
                    h: e.value.h,
                    s: e.value.s,
                    l: e.value.l,
                  }))
            : "random" == e.value
            ? (this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0,
              })
            : "string" == typeof e.value &&
              ((this.color = e), (this.color.rgb = hexToRgb(this.color.value))),
          (this.opacity =
            (v.particles.opacity.random ? Math.random() : 1) *
            v.particles.opacity.value),
          v.particles.opacity.anim.enable &&
            ((this.opacity_status = !1),
            (this.vo = v.particles.opacity.anim.speed / 100),
            v.particles.opacity.anim.sync ||
              (this.vo = this.vo * Math.random()));
        var i = {};
        switch (v.particles.move.direction) {
          case "top":
            i = {
              x: 0,
              y: -1,
            };
            break;
          case "top-right":
            i = {
              x: 0.5,
              y: -0.5,
            };
            break;
          case "right":
            i = {
              x: 1,
              y: -0,
            };
            break;
          case "bottom-right":
            i = {
              x: 0.5,
              y: 0.5,
            };
            break;
          case "bottom":
            i = {
              x: 0,
              y: 1,
            };
            break;
          case "bottom-left":
            i = {
              x: -0.5,
              y: 1,
            };
            break;
          case "left":
            i = {
              x: -1,
              y: 0,
            };
            break;
          case "top-left":
            i = {
              x: -0.5,
              y: -0.5,
            };
            break;
          default:
            i = {
              x: 0,
              y: 0,
            };
        }
        v.particles.move.straight
          ? ((this.vx = i.x),
            (this.vy = i.y),
            v.particles.move.random &&
              ((this.vx = this.vx * Math.random()),
              (this.vy = this.vy * Math.random())))
          : ((this.vx = i.x + Math.random() - 0.5),
            (this.vy = i.y + Math.random() - 0.5)),
          (this.vx_i = this.vx),
          (this.vy_i = this.vy);
        a = v.particles.shape.type;
        "object" == typeof a
          ? a instanceof Array &&
            ((e = a[Math.floor(Math.random() * a.length)]), (this.shape = e))
          : (this.shape = a),
          "image" == this.shape &&
            ((e = v.particles.shape),
            (this.img = {
              src: e.image.src,
              ratio: e.image.width / e.image.height,
            }),
            this.img.ratio || (this.img.ratio = 1),
            "svg" == v.tmp.img_type &&
              null != v.tmp.source_svg &&
              (v.fn.vendors.createSvgImg(this),
              v.tmp.pushing && (this.img.loaded = !1)));
      }),
      (v.fn.particle.prototype.draw = function () {
        var e,
          t,
          a,
          i = this;
        switch (
          ((e = null != i.radius_bubble ? i.radius_bubble : i.radius),
          (t = null != i.opacity_bubble ? i.opacity_bubble : i.opacity),
          (t = i.color.rgb
            ? "rgba(" +
              i.color.rgb.r +
              "," +
              i.color.rgb.g +
              "," +
              i.color.rgb.b +
              "," +
              t +
              ")"
            : "hsla(" +
              i.color.hsl.h +
              "," +
              i.color.hsl.s +
              "%," +
              i.color.hsl.l +
              "%," +
              t +
              ")"),
          (v.canvas.ctx.fillStyle = t),
          v.canvas.ctx.beginPath(),
          i.shape)
        ) {
          case "circle":
            v.canvas.ctx.arc(i.x, i.y, e, 0, 2 * Math.PI, !1);
            break;
          case "edge":
            v.canvas.ctx.rect(i.x - e, i.y - e, 2 * e, 2 * e);
            break;
          case "triangle":
            v.fn.vendors.drawShape(
              v.canvas.ctx,
              i.x - e,
              i.y + e / 1.66,
              2 * e,
              3,
              2
            );
            break;
          case "polygon":
            v.fn.vendors.drawShape(
              v.canvas.ctx,
              i.x - e / (v.particles.shape.polygon.nb_sides / 3.5),
              i.y - e / 0.76,
              (2.66 * e) / (v.particles.shape.polygon.nb_sides / 3),
              v.particles.shape.polygon.nb_sides,
              1
            );
            break;
          case "star":
            v.fn.vendors.drawShape(
              v.canvas.ctx,
              i.x - (2 * e) / (v.particles.shape.polygon.nb_sides / 4),
              i.y - e / 1.52,
              (2 * e * 2.66) / (v.particles.shape.polygon.nb_sides / 3),
              v.particles.shape.polygon.nb_sides,
              2
            );
            break;
          case "image":
            (a = "svg" == v.tmp.img_type ? i.img.obj : v.tmp.img_obj) &&
              v.canvas.ctx.drawImage(
                a,
                i.x - e,
                i.y - e,
                2 * e,
                (2 * e) / i.img.ratio
              );
        }
        v.canvas.ctx.closePath(),
          0 < v.particles.shape.stroke.width &&
            ((v.canvas.ctx.strokeStyle = v.particles.shape.stroke.color),
            (v.canvas.ctx.lineWidth = v.particles.shape.stroke.width),
            v.canvas.ctx.stroke()),
          v.canvas.ctx.fill();
      }),
      (v.fn.particlesCreate = function () {
        for (var e = 0; e < v.particles.number.value; e++)
          v.particles.array.push(
            new v.fn.particle(v.particles.color, v.particles.opacity.value)
          );
      }),
      (v.fn.particlesUpdate = function () {
        for (var e = 0; e < v.particles.array.length; e++) {
          var t,
            a = v.particles.array[e];
          if (
            (v.particles.move.enable &&
              ((t = v.particles.move.speed / 2),
              (a.x += a.vx * t),
              (a.y += a.vy * t)),
            v.particles.opacity.anim.enable &&
              (1 == a.opacity_status
                ? (a.opacity >= v.particles.opacity.value &&
                    (a.opacity_status = !1),
                  (a.opacity += a.vo))
                : (a.opacity <= v.particles.opacity.anim.opacity_min &&
                    (a.opacity_status = !0),
                  (a.opacity -= a.vo)),
              a.opacity < 0 && (a.opacity = 0)),
            v.particles.size.anim.enable &&
              (1 == a.size_status
                ? (a.radius >= v.particles.size.value && (a.size_status = !1),
                  (a.radius += a.vs))
                : (a.radius <= v.particles.size.anim.size_min &&
                    (a.size_status = !0),
                  (a.radius -= a.vs)),
              a.radius < 0 && (a.radius = 0)),
            (t =
              "bounce" == v.particles.move.out_mode
                ? {
                    x_left: a.radius,
                    x_right: v.canvas.w,
                    y_top: a.radius,
                    y_bottom: v.canvas.h,
                  }
                : {
                    x_left: -a.radius,
                    x_right: v.canvas.w + a.radius,
                    y_top: -a.radius,
                    y_bottom: v.canvas.h + a.radius,
                  }),
            "bounce" ===
              (a.x - a.radius > v.canvas.w
                ? ((a.x = t.x_left), (a.y = Math.random() * v.canvas.h))
                : a.x + a.radius < 0 &&
                  ((a.x = t.x_right), (a.y = Math.random() * v.canvas.h)),
              a.y - a.radius > v.canvas.h
                ? ((a.y = t.y_top), (a.x = Math.random() * v.canvas.w))
                : a.y + a.radius < 0 &&
                  ((a.y = t.y_bottom), (a.x = Math.random() * v.canvas.w)),
              v.particles.move.out_mode) &&
              ((a.x + a.radius > v.canvas.w || a.x - a.radius < 0) &&
                (a.vx = -a.vx),
              (a.y + a.radius > v.canvas.h || a.y - a.radius < 0) &&
                (a.vy = -a.vy)),
            isInArray("grab", v.interactivity.events.onhover.mode) &&
              v.fn.modes.grabParticle(a),
            (isInArray("bubble", v.interactivity.events.onhover.mode) ||
              isInArray("bubble", v.interactivity.events.onclick.mode)) &&
              v.fn.modes.bubbleParticle(a),
            (isInArray("repulse", v.interactivity.events.onhover.mode) ||
              isInArray("repulse", v.interactivity.events.onclick.mode)) &&
              v.fn.modes.repulseParticle(a),
            v.particles.line_linked.enable || v.particles.move.attract.enable)
          )
            for (var i = e + 1; i < v.particles.array.length; i++) {
              var n = v.particles.array[i];
              v.particles.line_linked.enable &&
                v.fn.interact.linkParticles(a, n),
                v.particles.move.attract.enable &&
                  v.fn.interact.attractParticles(a, n),
                v.particles.move.bounce && v.fn.interact.bounceParticles(a, n);
            }
        }
      }),
      (v.fn.particlesDraw = function () {
        v.canvas.ctx.clearRect(0, 0, v.canvas.w, v.canvas.h),
          v.fn.particlesUpdate();
        for (var e = 0; e < v.particles.array.length; e++)
          v.particles.array[e].draw();
      }),
      (v.fn.particlesEmpty = function () {
        v.particles.array = [];
      }),
      (v.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(v.fn.checkAnimFrame),
          cancelRequestAnimFrame(v.fn.drawAnimFrame),
          (v.tmp.source_svg = void 0),
          (v.tmp.img_obj = void 0),
          (v.tmp.count_svg = 0),
          v.fn.particlesEmpty(),
          v.fn.canvasClear(),
          v.fn.vendors.start();
      }),
      (v.fn.interact.linkParticles = function (e, t) {
        var a = e.x - t.x,
          i = e.y - t.y,
          a = Math.sqrt(a * a + i * i);
        a <= v.particles.line_linked.distance &&
          0 <
            (i =
              v.particles.line_linked.opacity -
              a /
                (1 / v.particles.line_linked.opacity) /
                v.particles.line_linked.distance) &&
          ((a = v.particles.line_linked.color_rgb_line),
          (v.canvas.ctx.strokeStyle =
            "rgba(" + a.r + "," + a.g + "," + a.b + "," + i + ")"),
          (v.canvas.ctx.lineWidth = v.particles.line_linked.width),
          v.canvas.ctx.beginPath(),
          v.canvas.ctx.moveTo(e.x, e.y),
          v.canvas.ctx.lineTo(t.x, t.y),
          v.canvas.ctx.stroke(),
          v.canvas.ctx.closePath());
      }),
      (v.fn.interact.attractParticles = function (e, t) {
        var a = e.x - t.x,
          i = e.y - t.y;
        Math.sqrt(a * a + i * i) <= v.particles.line_linked.distance &&
          ((a = a / (1e3 * v.particles.move.attract.rotateX)),
          (i = i / (1e3 * v.particles.move.attract.rotateY)),
          (e.vx -= a),
          (e.vy -= i),
          (t.vx += a),
          (t.vy += i));
      }),
      (v.fn.interact.bounceParticles = function (e, t) {
        var a = e.x - t.x,
          i = e.y - t.y;
        Math.sqrt(a * a + i * i) <= e.radius + t.radius &&
          ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
      }),
      (v.fn.modes.pushParticles = function (e, t) {
        v.tmp.pushing = !0;
        for (var a = 0; a < e; a++)
          v.particles.array.push(
            new v.fn.particle(v.particles.color, v.particles.opacity.value, {
              x: t ? t.pos_x : Math.random() * v.canvas.w,
              y: t ? t.pos_y : Math.random() * v.canvas.h,
            })
          ),
            a == e - 1 &&
              (v.particles.move.enable || v.fn.particlesDraw(),
              (v.tmp.pushing = !1));
      }),
      (v.fn.modes.removeParticles = function (e) {
        v.particles.array.splice(0, e),
          v.particles.move.enable || v.fn.particlesDraw();
      }),
      (v.fn.modes.bubbleParticle = function (r) {
        function e() {
          (r.opacity_bubble = r.opacity), (r.radius_bubble = r.radius);
        }
        function t(e, t, a, i, n) {
          var s;
          e != t &&
            (v.tmp.bubble_duration_end
              ? null != a &&
                ((s =
                  e +
                  (e -
                    (i -
                      (p * (i - e)) / v.interactivity.modes.bubble.duration))),
                "size" == n && (r.radius_bubble = s),
                "opacity" == n && (r.opacity_bubble = s))
              : l <= v.interactivity.modes.bubble.distance
              ? (null != a ? a : i) != e &&
                ((s =
                  i - (p * (i - e)) / v.interactivity.modes.bubble.duration),
                "size" == n && (r.radius_bubble = s),
                "opacity" == n && (r.opacity_bubble = s))
              : ("size" == n && (r.radius_bubble = void 0),
                "opacity" == n && (r.opacity_bubble = void 0)));
        }
        var a, i, n, s, c, o, l, p;
        v.interactivity.events.onhover.enable &&
        isInArray("bubble", v.interactivity.events.onhover.mode)
          ? ((c = r.x - v.interactivity.mouse.pos_x),
            (o = r.y - v.interactivity.mouse.pos_y),
            (a =
              1 -
              (l = Math.sqrt(c * c + o * o)) /
                v.interactivity.modes.bubble.distance),
            l <= v.interactivity.modes.bubble.distance
              ? 0 <= a &&
                "mousemove" == v.interactivity.status &&
                (v.interactivity.modes.bubble.size != v.particles.size.value &&
                  (v.interactivity.modes.bubble.size > v.particles.size.value
                    ? 0 <=
                        (n =
                          r.radius + v.interactivity.modes.bubble.size * a) &&
                      (r.radius_bubble = n)
                    : ((i = r.radius - v.interactivity.modes.bubble.size),
                      (n = r.radius - i * a),
                      (r.radius_bubble = 0 < n ? n : 0))),
                v.interactivity.modes.bubble.opacity !=
                  v.particles.opacity.value &&
                  (v.interactivity.modes.bubble.opacity >
                  v.particles.opacity.value
                    ? (s = v.interactivity.modes.bubble.opacity * a) >
                        r.opacity &&
                      s <= v.interactivity.modes.bubble.opacity &&
                      (r.opacity_bubble = s)
                    : (s =
                        r.opacity -
                        (v.particles.opacity.value -
                          v.interactivity.modes.bubble.opacity) *
                          a) < r.opacity &&
                      s >= v.interactivity.modes.bubble.opacity &&
                      (r.opacity_bubble = s)))
              : e(),
            "mouseleave" == v.interactivity.status && e())
          : v.interactivity.events.onclick.enable &&
            isInArray("bubble", v.interactivity.events.onclick.mode) &&
            (v.tmp.bubble_clicking &&
              ((c = r.x - v.interactivity.mouse.click_pos_x),
              (o = r.y - v.interactivity.mouse.click_pos_y),
              (l = Math.sqrt(c * c + o * o)),
              (p =
                (new Date().getTime() - v.interactivity.mouse.click_time) /
                1e3) > v.interactivity.modes.bubble.duration &&
                (v.tmp.bubble_duration_end = !0),
              p > 2 * v.interactivity.modes.bubble.duration &&
                ((v.tmp.bubble_clicking = !1),
                (v.tmp.bubble_duration_end = !1))),
            v.tmp.bubble_clicking &&
              (t(
                v.interactivity.modes.bubble.size,
                v.particles.size.value,
                r.radius_bubble,
                r.radius,
                "size"
              ),
              t(
                v.interactivity.modes.bubble.opacity,
                v.particles.opacity.value,
                r.opacity_bubble,
                r.opacity,
                "opacity"
              )));
      }),
      (v.fn.modes.repulseParticle = function (a) {
        var e, t, i, n, s, r, c;
        v.interactivity.events.onhover.enable &&
        isInArray("repulse", v.interactivity.events.onhover.mode) &&
        "mousemove" == v.interactivity.status
          ? ((e = a.x - v.interactivity.mouse.pos_x),
            (r = a.y - v.interactivity.mouse.pos_y),
            (t = e / (e = Math.sqrt(e * e + r * r))),
            (r = r / e),
            (e = clamp(
              (1 / (i = v.interactivity.modes.repulse.distance)) *
                (-1 * Math.pow(e / i, 2) + 1) *
                i *
                100,
              0,
              50
            )),
            (t = {
              x: a.x + t * e,
              y: a.y + r * e,
            }),
            "bounce" == v.particles.move.out_mode
              ? (0 < t.x - a.radius &&
                  t.x + a.radius < v.canvas.w &&
                  (a.x = t.x),
                0 < t.y - a.radius &&
                  t.y + a.radius < v.canvas.h &&
                  (a.y = t.y))
              : ((a.x = t.x), (a.y = t.y)))
          : v.interactivity.events.onclick.enable &&
            isInArray("repulse", v.interactivity.events.onclick.mode) &&
            (v.tmp.repulse_finish ||
              (v.tmp.repulse_count++,
              v.tmp.repulse_count == v.particles.array.length &&
                (v.tmp.repulse_finish = !0)),
            v.tmp.repulse_clicking
              ? ((i = Math.pow(v.interactivity.modes.repulse.distance / 6, 3)),
                (n = v.interactivity.mouse.click_pos_x - a.x),
                (s = v.interactivity.mouse.click_pos_y - a.y),
                (c = (-i / (r = n * n + s * s)) * 1),
                r <= i &&
                  (function () {
                    var e,
                      t = Math.atan2(s, n);
                    (a.vx = c * Math.cos(t)),
                      (a.vy = c * Math.sin(t)),
                      "bounce" == v.particles.move.out_mode &&
                        ((t = a.x + a.vx),
                        (e = a.y + a.vy),
                        (t + a.radius > v.canvas.w || t - a.radius < 0) &&
                          (a.vx = -a.vx),
                        (e + a.radius > v.canvas.h || e - a.radius < 0) &&
                          (a.vy = -a.vy));
                  })())
              : 0 == v.tmp.repulse_clicking &&
                ((a.vx = a.vx_i), (a.vy = a.vy_i)));
      }),
      (v.fn.modes.grabParticle = function (e) {
        var t, a;
        v.interactivity.events.onhover.enable &&
          "mousemove" == v.interactivity.status &&
          ((a = e.x - v.interactivity.mouse.pos_x),
          (t = e.y - v.interactivity.mouse.pos_y),
          (a = Math.sqrt(a * a + t * t)) <=
            v.interactivity.modes.grab.distance &&
            0 <
              (t =
                v.interactivity.modes.grab.line_linked.opacity -
                a /
                  (1 / v.interactivity.modes.grab.line_linked.opacity) /
                  v.interactivity.modes.grab.distance) &&
            ((a = v.particles.line_linked.color_rgb_line),
            (v.canvas.ctx.strokeStyle =
              "rgba(" + a.r + "," + a.g + "," + a.b + "," + t + ")"),
            (v.canvas.ctx.lineWidth = v.particles.line_linked.width),
            v.canvas.ctx.beginPath(),
            v.canvas.ctx.moveTo(e.x, e.y),
            v.canvas.ctx.lineTo(
              v.interactivity.mouse.pos_x,
              v.interactivity.mouse.pos_y
            ),
            v.canvas.ctx.stroke(),
            v.canvas.ctx.closePath()));
      }),
      (v.fn.vendors.eventsListeners = function () {
        "window" == v.interactivity.detect_on
          ? (v.interactivity.el = window)
          : (v.interactivity.el = v.canvas.el),
          (v.interactivity.events.onhover.enable ||
            v.interactivity.events.onclick.enable) &&
            (v.interactivity.el.addEventListener("mousemove", function (e) {
              var t;
              (e =
                v.interactivity.el == window
                  ? ((t = e.clientX), e.clientY)
                  : ((t = e.offsetX || e.clientX), e.offsetY || e.clientY)),
                (v.interactivity.mouse.pos_x = t),
                (v.interactivity.mouse.pos_y = e),
                v.tmp.retina &&
                  ((v.interactivity.mouse.pos_x *= v.canvas.pxratio),
                  (v.interactivity.mouse.pos_y *= v.canvas.pxratio)),
                (v.interactivity.status = "mousemove");
            }),
            v.interactivity.el.addEventListener("mouseleave", function (e) {
              (v.interactivity.mouse.pos_x = null),
                (v.interactivity.mouse.pos_y = null),
                (v.interactivity.status = "mouseleave");
            })),
          v.interactivity.events.onclick.enable &&
            v.interactivity.el.addEventListener("click", function () {
              if (
                ((v.interactivity.mouse.click_pos_x =
                  v.interactivity.mouse.pos_x),
                (v.interactivity.mouse.click_pos_y =
                  v.interactivity.mouse.pos_y),
                (v.interactivity.mouse.click_time = new Date().getTime()),
                v.interactivity.events.onclick.enable)
              )
                switch (v.interactivity.events.onclick.mode) {
                  case "push":
                    v.particles.move.enable ||
                    1 == v.interactivity.modes.push.particles_nb
                      ? v.fn.modes.pushParticles(
                          v.interactivity.modes.push.particles_nb,
                          v.interactivity.mouse
                        )
                      : 1 < v.interactivity.modes.push.particles_nb &&
                        v.fn.modes.pushParticles(
                          v.interactivity.modes.push.particles_nb
                        );
                    break;
                  case "remove":
                    v.fn.modes.removeParticles(
                      v.interactivity.modes.remove.particles_nb
                    );
                    break;
                  case "bubble":
                    v.tmp.bubble_clicking = !0;
                    break;
                  case "repulse":
                    (v.tmp.repulse_clicking = !0),
                      (v.tmp.repulse_count = 0),
                      (v.tmp.repulse_finish = !1),
                      setTimeout(function () {
                        v.tmp.repulse_clicking = !1;
                      }, 1e3 * v.interactivity.modes.repulse.duration);
                }
            });
      }),
      (v.fn.vendors.densityAutoParticles = function () {
        var e;
        v.particles.number.density.enable &&
          ((e = (v.canvas.el.width * v.canvas.el.height) / 1e3),
          v.tmp.retina && (e /= 2 * v.canvas.pxratio),
          (e =
            (e * v.particles.number.value) /
            v.particles.number.density.value_area),
          (e = v.particles.array.length - e) < 0
            ? v.fn.modes.pushParticles(Math.abs(e))
            : v.fn.modes.removeParticles(e));
      }),
      (v.fn.vendors.checkOverlap = function (e, t) {
        for (var a = 0; a < v.particles.array.length; a++) {
          var i = v.particles.array[a],
            n = e.x - i.x,
            s = e.y - i.y;
          Math.sqrt(n * n + s * s) <= e.radius + i.radius &&
            ((e.x = t ? t.x : Math.random() * v.canvas.w),
            (e.y = t ? t.y : Math.random() * v.canvas.h),
            v.fn.vendors.checkOverlap(e));
        }
      }),
      (v.fn.vendors.createSvgImg = function (n) {
        var e = v.tmp.source_svg.replace(
            /#([0-9A-F]{3,6})/gi,
            function (e, t, a, i) {
              return n.color.rgb
                ? "rgba(" +
                    n.color.rgb.r +
                    "," +
                    n.color.rgb.g +
                    "," +
                    n.color.rgb.b +
                    "," +
                    n.opacity +
                    ")"
                : "hsla(" +
                    n.color.hsl.h +
                    "," +
                    n.color.hsl.s +
                    "%," +
                    n.color.hsl.l +
                    "%," +
                    n.opacity +
                    ")";
            }
          ),
          e = new Blob([e], {
            type: "image/svg+xml;charset=utf-8",
          }),
          t = window.URL || window.webkitURL || window,
          a = t.createObjectURL(e),
          i = new Image();
        i.addEventListener("load", function () {
          (n.img.obj = i),
            (n.img.loaded = !0),
            t.revokeObjectURL(a),
            v.tmp.count_svg++;
        }),
          (i.src = a);
      }),
      (v.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(v.fn.drawAnimFrame), a.remove(), (pJSDom = null);
      }),
      (v.fn.vendors.drawShape = function (e, t, a, i, n, s) {
        var r = n * s,
          n = n / s,
          c = Math.PI - (Math.PI * ((180 * (n - 2)) / n)) / 180;
        e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
        for (var o = 0; o < r; o++)
          e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
        e.fill(), e.restore();
      }),
      (v.fn.vendors.exportImg = function () {
        window.open(v.canvas.el.toDataURL("image/png"), "_blank");
      }),
      (v.fn.vendors.loadImg = function (e) {
        var t, a;
        (v.tmp.img_error = void 0),
          "" != v.particles.shape.image.src
            ? "svg" == e
              ? ((t = new XMLHttpRequest()).open(
                  "GET",
                  v.particles.shape.image.src
                ),
                (t.onreadystatechange = function (e) {
                  4 == t.readyState &&
                    (200 == t.status
                      ? ((v.tmp.source_svg = e.currentTarget.response),
                        v.fn.vendors.checkBeforeDraw())
                      : (console.log("Error pJS - Image not found"),
                        (v.tmp.img_error = !0)));
                }),
                t.send())
              : ((a = new Image()).addEventListener("load", function () {
                  (v.tmp.img_obj = a), v.fn.vendors.checkBeforeDraw();
                }),
                (a.src = v.particles.shape.image.src))
            : (console.log("Error pJS - No image.src"), (v.tmp.img_error = !0));
      }),
      (v.fn.vendors.draw = function () {
        "image" == v.particles.shape.type
          ? "svg" == v.tmp.img_type
            ? v.tmp.count_svg >= v.particles.number.value
              ? (v.fn.particlesDraw(),
                v.particles.move.enable
                  ? (v.fn.drawAnimFrame = requestAnimFrame(v.fn.vendors.draw))
                  : cancelRequestAnimFrame(v.fn.drawAnimFrame))
              : v.tmp.img_error ||
                (v.fn.drawAnimFrame = requestAnimFrame(v.fn.vendors.draw))
            : null != v.tmp.img_obj
            ? (v.fn.particlesDraw(),
              v.particles.move.enable
                ? (v.fn.drawAnimFrame = requestAnimFrame(v.fn.vendors.draw))
                : cancelRequestAnimFrame(v.fn.drawAnimFrame))
            : v.tmp.img_error ||
              (v.fn.drawAnimFrame = requestAnimFrame(v.fn.vendors.draw))
          : (v.fn.particlesDraw(),
            v.particles.move.enable
              ? (v.fn.drawAnimFrame = requestAnimFrame(v.fn.vendors.draw))
              : cancelRequestAnimFrame(v.fn.drawAnimFrame));
      }),
      (v.fn.vendors.checkBeforeDraw = function () {
        "image" == v.particles.shape.type
          ? "svg" == v.tmp.img_type && null == v.tmp.source_svg
            ? (v.tmp.checkAnimFrame = requestAnimFrame(check))
            : (cancelRequestAnimFrame(v.tmp.checkAnimFrame),
              v.tmp.img_error || (v.fn.vendors.init(), v.fn.vendors.draw()))
          : (v.fn.vendors.init(), v.fn.vendors.draw());
      }),
      (v.fn.vendors.init = function () {
        v.fn.retinaInit(),
          v.fn.canvasInit(),
          v.fn.canvasSize(),
          v.fn.canvasPaint(),
          v.fn.particlesCreate(),
          v.fn.vendors.densityAutoParticles(),
          (v.particles.line_linked.color_rgb_line = hexToRgb(
            v.particles.line_linked.color
          ));
      }),
      (v.fn.vendors.start = function () {
        isInArray("image", v.particles.shape.type)
          ? ((v.tmp.img_type = v.particles.shape.image.src.substr(
              v.particles.shape.image.src.length - 3
            )),
            v.fn.vendors.loadImg(v.tmp.img_type))
          : v.fn.vendors.checkBeforeDraw();
      }),
      v.fn.vendors.eventsListeners(),
      v.fn.vendors.start();
  },
  Stats =
    ((Object.deepExtend = function (e, t) {
      for (var a in t)
        t[a] && t[a].constructor && t[a].constructor === Object
          ? ((e[a] = e[a] || {}), arguments.callee(e[a], t[a]))
          : (e[a] = t[a]);
      return e;
    }),
    (window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }),
    (window.cancelRequestAnimFrame =
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout),
    (window.pJSDom = []),
    (window.particlesJS = function (e, t) {
      "string" != typeof e && ((t = e), (e = "particles-js")),
        (e = e || "particles-js");
      var a = document.getElementById(e),
        i = "particles-js-canvas-el",
        n = a.getElementsByClassName(i);
      if (n.length) for (; 0 < n.length; ) a.removeChild(n[0]);
      var s = document.createElement("canvas");
      (s.className = i),
        (s.style.width = "100%"),
        (s.style.height = "100%"),
        null != document.getElementById(e).appendChild(s) &&
          pJSDom.push(new pJS(e, t));
    }),
    (window.particlesJS.load = function (t, e, a) {
      var i = new XMLHttpRequest();
      i.open("GET", e),
        (i.onreadystatechange = function (e) {
          4 == i.readyState &&
            (200 == i.status
              ? ((e = JSON.parse(e.currentTarget.response)),
                window.particlesJS(t, e),
                a && a())
              : (console.log("Error pJS - XMLHttpRequest status: " + i.status),
                console.log("Error pJS - File config not found")));
        }),
        i.send();
    }),
    function () {
      function e(e) {
        return n.appendChild(e.dom), e;
      }
      function t(e) {
        for (var t = 0; t < n.children.length; t++)
          n.children[t].style.display = t === e ? "block" : "none";
        i = e;
      }
      var a,
        i = 0,
        n = document.createElement("div"),
        s =
          ((n.style.cssText =
            "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
          n.addEventListener(
            "click",
            function (e) {
              e.preventDefault(), t(++i % n.children.length);
            },
            !1
          ),
          (performance || Date).now()),
        r = s,
        c = 0,
        o = e(new Stats.Panel("FPS", "#0ff", "#002")),
        l = e(new Stats.Panel("MS", "#0f0", "#020"));
      return (
        self.performance &&
          self.performance.memory &&
          (a = e(new Stats.Panel("MB", "#f08", "#201"))),
        t(0),
        {
          REVISION: 16,
          dom: n,
          addPanel: e,
          showPanel: t,
          begin: function () {
            s = (performance || Date).now();
          },
          end: function () {
            c++;
            var e,
              t = (performance || Date).now();
            return (
              l.update(t - s, 200),
              r + 1e3 < t &&
                (o.update((1e3 * c) / (t - r), 100), (r = t), (c = 0), a) &&
                ((e = performance.memory),
                a.update(
                  e.usedJSHeapSize / 1048576,
                  e.jsHeapSizeLimit / 1048576
                )),
              t
            );
          },
          update: function () {
            s = this.end();
          },
          domElement: n,
          setMode: t,
        }
      );
    });
(Stats.Panel = function (a, i, n) {
  var s = 1 / 0,
    r = 0,
    c = Math.round,
    o = c(window.devicePixelRatio || 1),
    l = 80 * o,
    e = 48 * o,
    p = 3 * o,
    v = 2 * o,
    d = 3 * o,
    m = 15 * o,
    u = 74 * o,
    y = 30 * o,
    b = document.createElement("canvas"),
    h =
      ((b.width = l),
      (b.height = e),
      (b.style.cssText = "width:80px;height:48px"),
      b.getContext("2d"));
  return (
    (h.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif"),
    (h.textBaseline = "top"),
    (h.fillStyle = n),
    h.fillRect(0, 0, l, e),
    (h.fillStyle = i),
    h.fillText(a, p, v),
    h.fillRect(d, m, u, y),
    (h.fillStyle = n),
    (h.globalAlpha = 0.9),
    h.fillRect(d, m, u, y),
    {
      dom: b,
      update: function (e, t) {
        (s = Math.min(s, e)),
          (r = Math.max(r, e)),
          (h.fillStyle = n),
          (h.globalAlpha = 1),
          h.fillRect(0, 0, l, m),
          (h.fillStyle = i),
          h.fillText(c(e) + " " + a + " (" + c(s) + "-" + c(r) + ")", p, v),
          h.drawImage(b, d + o, m, u - o, y, d, m, u - o, y),
          h.fillRect(d + u - o, m, o, y),
          (h.fillStyle = n),
          (h.globalAlpha = 0.9),
          h.fillRect(d + u - o, m, o, c((1 - e / t) * y));
      },
    }
  );
}),
  "object" == typeof module && (module.exports = Stats);
