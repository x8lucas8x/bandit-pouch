;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    101: function(e, n, t) {
      'use strict'
      t.d(n, 'c', function() {
        return P
      }),
        t.d(n, 'b', function() {
          return k
        }),
        t.d(n, 'a', function() {
          return R
        })
      var a = t(6),
        i = t.n(a),
        o = t(7),
        r = t.n(o),
        l = t(8),
        s = t.n(l),
        c = t(9),
        u = t.n(c),
        d = t(10),
        p = t.n(d),
        h = t(11),
        b = t.n(h),
        m = t(0),
        f = t.n(m),
        E = t(3),
        v = t.n(E),
        y = t(103),
        C = t.n(y),
        O = t(561),
        x = t(563),
        g = t(564),
        j = t(562),
        K = t(547),
        T = function(e) {
          var n = e.id,
            t = e.pages,
            a = e.examples,
            i = e.defaultActiveKey
          return f.a.createElement(
            O.a.Container,
            { id: n, defaultActiveKey: i },
            f.a.createElement(
              x.a,
              null,
              f.a.createElement(
                g.a,
                { sm: 4, md: 3, lg: 2 },
                f.a.createElement(
                  j.a,
                  { bsStyle: 'pills', stacked: !0 },
                  t.map(function(e) {
                    return f.a.createElement(
                      K.a,
                      { key: e.id, eventKey: e.id },
                      e.title
                    )
                  })
                )
              ),
              f.a.createElement(
                g.a,
                { sm: 8, md: 9, lg: 10 },
                f.a.createElement(
                  O.a.Content,
                  { animation: !0 },
                  t.map(function(e) {
                    return f.a.createElement(
                      O.a.Pane,
                      { key: e.id, eventKey: e.id, title: e.title },
                      f.a.createElement(R, {
                        html: e.html,
                        title: e.title,
                        examples: a[e.id],
                      })
                    )
                  })
                )
              )
            )
          )
        }
      function P() {
        var e = (
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {}) || {}
          ).allMarkdownRemark,
          n = ((void 0 === e ? {} : e) || {}).edges
        return (void 0 === n ? [] : n).map(function(e) {
          var n = e.node
          return b()({ html: n.html }, n.frontmatter)
        })
      }
      function k(e) {
        var n = e.id,
          t = e.defaultActiveKey,
          a = e.data,
          i = e.examples,
          o = P(a)
        return f.a.createElement(T, {
          id: n,
          pages: o,
          examples: i,
          defaultActiveKey: t,
        })
      }
      ;(T.propTypes = {
        id: v.a.string.isRequired,
        pages: v.a.array.isRequired,
        examples: v.a.object,
        defaultActiveKey: v.a.string.isRequired,
      }),
        (T.defaultProps = { examples: {} }),
        (k.propTypes = {
          id: v.a.string.isRequired,
          data: v.a.object.isRequired,
          examples: v.a.object,
          defaultActiveKey: v.a.string.isRequired,
        }),
        (k.defaultProps = { examples: {} })
      var R = (function(e) {
        function n(e) {
          var t
          return (
            i()(this, n),
            ((t = s()(this, u()(n).call(this, e))).element = f.a.createRef()),
            t
          )
        }
        return (
          p()(n, e),
          r()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                this.element.current
                  .querySelectorAll('code')
                  .forEach(function(e) {
                    return C.a.highlightBlock(e)
                  })
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  n = e.title,
                  t = e.html,
                  a = e.examples
                return f.a.createElement(
                  'div',
                  { ref: this.element, className: 'row markdown-container' },
                  f.a.createElement(
                    g.a,
                    { xs: 12 },
                    f.a.createElement('h1', null, n)
                  ),
                  f.a.createElement('hr', null),
                  f.a.createElement(
                    g.a,
                    { xs: 12 },
                    f.a.createElement('div', {
                      className: 'markdown-content',
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    a.map(function(e) {
                      return f.a.createElement('span', { key: e }, e)
                    })
                  )
                )
              },
            },
          ]),
          n
        )
      })(m.Component)
      ;(R.propTypes = {
        title: v.a.string.isRequired,
        html: v.a.string.isRequired,
        examples: v.a.array,
      }),
        (R.defaultProps = { examples: [] })
    },
    133: function(e, n, t) {
      'use strict'
      var a = t(74),
        i = t(75),
        o = t(73),
        r = t(87),
        l = t(0),
        s = t.n(l),
        c = t(3),
        u = t.n(c),
        d = t(82),
        p = t.n(d),
        h = t(86),
        b = {
          href: u.a.string,
          onClick: u.a.func,
          onKeyDown: u.a.func,
          disabled: u.a.bool,
          role: u.a.string,
          tabIndex: u.a.oneOfType([u.a.number, u.a.string]),
          componentClass: p.a,
        }
      function m(e) {
        return !e || '#' === e.trim()
      }
      var f = (function(e) {
        function n(n, t) {
          var a
          return (
            ((a = e.call(this, n, t) || this).handleClick = a.handleClick.bind(
              Object(r.a)(Object(r.a)(a))
            )),
            (a.handleKeyDown = a.handleKeyDown.bind(
              Object(r.a)(Object(r.a)(a))
            )),
            a
          )
        }
        Object(o.a)(n, e)
        var t = n.prototype
        return (
          (t.handleClick = function(e) {
            var n = this.props,
              t = n.disabled,
              a = n.href,
              i = n.onClick
            ;(t || m(a)) && e.preventDefault(),
              t ? e.stopPropagation() : i && i(e)
          }),
          (t.handleKeyDown = function(e) {
            ' ' === e.key && (e.preventDefault(), this.handleClick(e))
          }),
          (t.render = function() {
            var e = this.props,
              n = e.componentClass,
              t = e.disabled,
              o = e.onKeyDown,
              r = Object(i.a)(e, ['componentClass', 'disabled', 'onKeyDown'])
            return (
              m(r.href) &&
                ((r.role = r.role || 'button'), (r.href = r.href || '#')),
              t &&
                ((r.tabIndex = -1),
                (r.style = Object(a.a)({ pointerEvents: 'none' }, r.style))),
              s.a.createElement(
                n,
                Object(a.a)({}, r, {
                  onClick: this.handleClick,
                  onKeyDown: Object(h.a)(this.handleKeyDown, o),
                })
              )
            )
          }),
          n
        )
      })(s.a.Component)
      ;(f.propTypes = b), (f.defaultProps = { componentClass: 'a' }), (n.a = f)
    },
    135: function(e, n, t) {
      'use strict'
      var a,
        i = t(74),
        o = t(75),
        r = t(73),
        l = t(72),
        s = t.n(l),
        c = t(0),
        u = t.n(c),
        d = t(3),
        p = t.n(d),
        h = t(145),
        b = t.n(h),
        m = {
          in: p.a.bool,
          mountOnEnter: p.a.bool,
          unmountOnExit: p.a.bool,
          appear: p.a.bool,
          timeout: p.a.number,
          onEnter: p.a.func,
          onEntering: p.a.func,
          onEntered: p.a.func,
          onExit: p.a.func,
          onExiting: p.a.func,
          onExited: p.a.func,
        },
        f = (((a = {})[h.ENTERING] = 'in'), (a[h.ENTERED] = 'in'), a),
        E = (function(e) {
          function n() {
            return e.apply(this, arguments) || this
          }
          return (
            Object(r.a)(n, e),
            (n.prototype.render = function() {
              var e = this.props,
                n = e.className,
                t = e.children,
                a = Object(o.a)(e, ['className', 'children'])
              return u.a.createElement(b.a, a, function(e, a) {
                return u.a.cloneElement(
                  t,
                  Object(i.a)({}, a, {
                    className: s()('fade', n, t.props.className, f[e]),
                  })
                )
              })
            }),
            n
          )
        })(u.a.Component)
      ;(E.propTypes = m),
        (E.defaultProps = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
        }),
        (n.a = E)
    },
    547: function(e, n, t) {
      'use strict'
      var a = t(74),
        i = t(75),
        o = t(73),
        r = t(87),
        l = t(72),
        s = t.n(l),
        c = t(0),
        u = t.n(c),
        d = t(3),
        p = t.n(d),
        h = t(133),
        b = t(86),
        m = {
          active: p.a.bool,
          disabled: p.a.bool,
          role: p.a.string,
          href: p.a.string,
          onClick: p.a.func,
          onSelect: p.a.func,
          eventKey: p.a.any,
        },
        f = (function(e) {
          function n(n, t) {
            var a
            return (
              ((a =
                e.call(this, n, t) || this).handleClick = a.handleClick.bind(
                Object(r.a)(Object(r.a)(a))
              )),
              a
            )
          }
          Object(o.a)(n, e)
          var t = n.prototype
          return (
            (t.handleClick = function(e) {
              this.props.disabled
                ? e.preventDefault()
                : this.props.onSelect &&
                  this.props.onSelect(this.props.eventKey, e)
            }),
            (t.render = function() {
              var e = this.props,
                n = e.active,
                t = e.disabled,
                o = e.onClick,
                r = e.className,
                l = e.style,
                c = Object(i.a)(e, [
                  'active',
                  'disabled',
                  'onClick',
                  'className',
                  'style',
                ])
              return (
                delete c.onSelect,
                delete c.eventKey,
                delete c.activeKey,
                delete c.activeHref,
                c.role
                  ? 'tab' === c.role && (c['aria-selected'] = n)
                  : '#' === c.href && (c.role = 'button'),
                u.a.createElement(
                  'li',
                  {
                    role: 'presentation',
                    className: s()(r, { active: n, disabled: t }),
                    style: l,
                  },
                  u.a.createElement(
                    h.a,
                    Object(a.a)({}, c, {
                      disabled: t,
                      onClick: Object(b.a)(o, this.handleClick),
                    })
                  )
                )
              )
            }),
            n
          )
        })(u.a.Component)
      ;(f.propTypes = m),
        (f.defaultProps = { active: !1, disabled: !1 }),
        (n.a = f)
    },
    561: function(e, n, t) {
      'use strict'
      var a = t(73),
        i = t(74),
        o = t(0),
        r = t.n(o),
        l = t(3),
        s = t.n(l),
        c = t(75),
        u = t(142),
        d = t.n(u),
        p = s.a.oneOfType([s.a.string, s.a.number]),
        h = {
          id: function(e) {
            var n = null
            if (!e.generateChildId) {
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                a[i - 1] = arguments[i]
              ;(n = p.apply(void 0, [e].concat(a))) ||
                e.id ||
                (n = new Error(
                  'In order to properly initialize Tabs in a way that is accessible to assistive technologies (such as screen readers) an `id` or a `generateChildId` prop to TabContainer is required'
                ))
            }
            return n
          },
          generateChildId: s.a.func,
          onSelect: s.a.func,
          activeKey: s.a.any,
        },
        b = {
          $bs_tabContainer: s.a.shape({
            activeKey: s.a.any,
            onSelect: s.a.func.isRequired,
            getTabId: s.a.func.isRequired,
            getPaneId: s.a.func.isRequired,
          }),
        },
        m = (function(e) {
          function n() {
            return e.apply(this, arguments) || this
          }
          Object(a.a)(n, e)
          var t = n.prototype
          return (
            (t.getChildContext = function() {
              var e = this.props,
                n = e.activeKey,
                t = e.onSelect,
                a = e.generateChildId,
                i = e.id,
                o =
                  a ||
                  function(e, n) {
                    return i ? i + '-' + n + '-' + e : null
                  }
              return {
                $bs_tabContainer: {
                  activeKey: n,
                  onSelect: t,
                  getTabId: function(e) {
                    return o(e, 'tab')
                  },
                  getPaneId: function(e) {
                    return o(e, 'pane')
                  },
                },
              }
            }),
            (t.render = function() {
              var e = this.props,
                n = e.children,
                t = Object(c.a)(e, ['children'])
              return (
                delete t.generateChildId,
                delete t.onSelect,
                delete t.activeKey,
                r.a.cloneElement(r.a.Children.only(n), t)
              )
            }),
            n
          )
        })(r.a.Component)
      ;(m.propTypes = h), (m.childContextTypes = b)
      var f = d()(m, { activeKey: 'onSelect' }),
        E = t(87),
        v = t(72),
        y = t.n(v),
        C = t(82),
        O = t.n(C),
        x = t(78),
        g = {
          componentClass: O.a,
          animation: s.a.oneOfType([s.a.bool, O.a]),
          mountOnEnter: s.a.bool,
          unmountOnExit: s.a.bool,
        },
        j = { $bs_tabContainer: s.a.shape({ activeKey: s.a.any }) },
        K = {
          $bs_tabContent: s.a.shape({
            bsClass: s.a.string,
            animation: s.a.oneOfType([s.a.bool, O.a]),
            activeKey: s.a.any,
            mountOnEnter: s.a.bool,
            unmountOnExit: s.a.bool,
            onPaneEnter: s.a.func.isRequired,
            onPaneExited: s.a.func.isRequired,
            exiting: s.a.bool.isRequired,
          }),
        },
        T = (function(e) {
          function n(n, t) {
            var a
            return (
              ((a =
                e.call(this, n, t) ||
                this).handlePaneEnter = a.handlePaneEnter.bind(
                Object(E.a)(Object(E.a)(a))
              )),
              (a.handlePaneExited = a.handlePaneExited.bind(
                Object(E.a)(Object(E.a)(a))
              )),
              (a.state = { activeKey: null, activeChild: null }),
              a
            )
          }
          Object(a.a)(n, e)
          var t = n.prototype
          return (
            (t.getChildContext = function() {
              var e = this.props,
                n = e.bsClass,
                t = e.animation,
                a = e.mountOnEnter,
                i = e.unmountOnExit,
                o = this.state.activeKey,
                r = this.getContainerActiveKey(),
                l = null != o && o !== r
              return {
                $bs_tabContent: {
                  bsClass: n,
                  animation: t,
                  activeKey: null != o ? o : r,
                  mountOnEnter: a,
                  unmountOnExit: i,
                  onPaneEnter: this.handlePaneEnter,
                  onPaneExited: this.handlePaneExited,
                  exiting: l,
                },
              }
            }),
            (t.componentWillReceiveProps = function(e) {
              !e.animation &&
                this.state.activeChild &&
                this.setState({ activeKey: null, activeChild: null })
            }),
            (t.componentWillUnmount = function() {
              this.isUnmounted = !0
            }),
            (t.getContainerActiveKey = function() {
              var e = this.context.$bs_tabContainer
              return e && e.activeKey
            }),
            (t.handlePaneEnter = function(e, n) {
              return (
                !!this.props.animation &&
                (n === this.getContainerActiveKey() &&
                  (this.setState({ activeKey: n, activeChild: e }), !0))
              )
            }),
            (t.handlePaneExited = function(e) {
              this.isUnmounted ||
                this.setState(function(n) {
                  return n.activeChild !== e
                    ? null
                    : { activeKey: null, activeChild: null }
                })
            }),
            (t.render = function() {
              var e = this.props,
                n = e.componentClass,
                t = e.className,
                a = Object(c.a)(e, ['componentClass', 'className']),
                o = Object(x.g)(a, [
                  'animation',
                  'mountOnEnter',
                  'unmountOnExit',
                ]),
                l = o[0],
                s = o[1]
              return r.a.createElement(
                n,
                Object(i.a)({}, s, {
                  className: y()(t, Object(x.e)(l, 'content')),
                })
              )
            }),
            n
          )
        })(r.a.Component)
      ;(T.propTypes = g),
        (T.defaultProps = {
          componentClass: 'div',
          animation: !0,
          mountOnEnter: !1,
          unmountOnExit: !1,
        }),
        (T.contextTypes = j),
        (T.childContextTypes = K)
      var P = Object(x.a)('tab', T),
        k = (t(23), t(86)),
        R = t(135),
        I = {
          eventKey: s.a.any,
          animation: s.a.oneOfType([s.a.bool, O.a]),
          id: s.a.string,
          'aria-labelledby': s.a.string,
          bsClass: s.a.string,
          onEnter: s.a.func,
          onEntering: s.a.func,
          onEntered: s.a.func,
          onExit: s.a.func,
          onExiting: s.a.func,
          onExited: s.a.func,
          mountOnEnter: s.a.bool,
          unmountOnExit: s.a.bool,
        },
        w = {
          $bs_tabContainer: s.a.shape({
            getTabId: s.a.func,
            getPaneId: s.a.func,
          }),
          $bs_tabContent: s.a.shape({
            bsClass: s.a.string,
            animation: s.a.oneOfType([s.a.bool, O.a]),
            activeKey: s.a.any,
            mountOnEnter: s.a.bool,
            unmountOnExit: s.a.bool,
            onPaneEnter: s.a.func.isRequired,
            onPaneExited: s.a.func.isRequired,
            exiting: s.a.bool.isRequired,
          }),
        },
        q = { $bs_tabContainer: s.a.oneOf([null]) },
        N = (function(e) {
          function n(n, t) {
            var a
            return (
              ((a =
                e.call(this, n, t) || this).handleEnter = a.handleEnter.bind(
                Object(E.a)(Object(E.a)(a))
              )),
              (a.handleExited = a.handleExited.bind(
                Object(E.a)(Object(E.a)(a))
              )),
              (a.in = !1),
              a
            )
          }
          Object(a.a)(n, e)
          var t = n.prototype
          return (
            (t.getChildContext = function() {
              return { $bs_tabContainer: null }
            }),
            (t.componentDidMount = function() {
              this.shouldBeIn() && this.handleEnter()
            }),
            (t.componentDidUpdate = function() {
              this.in
                ? this.shouldBeIn() || this.handleExited()
                : this.shouldBeIn() && this.handleEnter()
            }),
            (t.componentWillUnmount = function() {
              this.in && this.handleExited()
            }),
            (t.getAnimation = function() {
              if (null != this.props.animation) return this.props.animation
              var e = this.context.$bs_tabContent
              return e && e.animation
            }),
            (t.handleEnter = function() {
              var e = this.context.$bs_tabContent
              e && (this.in = e.onPaneEnter(this, this.props.eventKey))
            }),
            (t.handleExited = function() {
              var e = this.context.$bs_tabContent
              e && (e.onPaneExited(this), (this.in = !1))
            }),
            (t.isActive = function() {
              var e = this.context.$bs_tabContent,
                n = e && e.activeKey
              return this.props.eventKey === n
            }),
            (t.shouldBeIn = function() {
              return this.getAnimation() && this.isActive()
            }),
            (t.render = function() {
              var e = this.props,
                n = e.eventKey,
                t = e.className,
                a = e.onEnter,
                o = e.onEntering,
                l = e.onEntered,
                s = e.onExit,
                u = e.onExiting,
                d = e.onExited,
                p = e.mountOnEnter,
                h = e.unmountOnExit,
                b = Object(c.a)(e, [
                  'eventKey',
                  'className',
                  'onEnter',
                  'onEntering',
                  'onEntered',
                  'onExit',
                  'onExiting',
                  'onExited',
                  'mountOnEnter',
                  'unmountOnExit',
                ]),
                m = this.context,
                f = m.$bs_tabContent,
                E = m.$bs_tabContainer,
                v = Object(x.g)(b, ['animation']),
                C = v[0],
                O = v[1],
                g = this.isActive(),
                j = this.getAnimation(),
                K = null != p ? p : f && f.mountOnEnter,
                T = null != h ? h : f && f.unmountOnExit
              if (!g && !j && T) return null
              var P = !0 === j ? R.a : j || null
              f && (C.bsClass = Object(x.e)(f, 'pane'))
              var I = Object(i.a)({}, Object(x.d)(C), { active: g })
              E &&
                ((O.id = E.getPaneId(n)),
                (O['aria-labelledby'] = E.getTabId(n)))
              var w = r.a.createElement(
                'div',
                Object(i.a)({}, O, {
                  role: 'tabpanel',
                  'aria-hidden': !g,
                  className: y()(t, I),
                })
              )
              if (P) {
                var q = f && f.exiting
                return r.a.createElement(
                  P,
                  {
                    in: g && !q,
                    onEnter: Object(k.a)(this.handleEnter, a),
                    onEntering: o,
                    onEntered: l,
                    onExit: s,
                    onExiting: u,
                    onExited: Object(k.a)(this.handleExited, d),
                    mountOnEnter: K,
                    unmountOnExit: T,
                  },
                  w
                )
              }
              return w
            }),
            n
          )
        })(r.a.Component)
      ;(N.propTypes = I), (N.contextTypes = w), (N.childContextTypes = q)
      var A = Object(x.a)('tab-pane', N),
        _ = Object(i.a)({}, A.propTypes, {
          disabled: s.a.bool,
          title: s.a.node,
          tabClassName: s.a.string,
        }),
        S = (function(e) {
          function n() {
            return e.apply(this, arguments) || this
          }
          return (
            Object(a.a)(n, e),
            (n.prototype.render = function() {
              var e = Object(i.a)({}, this.props)
              return (
                delete e.title,
                delete e.disabled,
                delete e.tabClassName,
                r.a.createElement(A, e)
              )
            }),
            n
          )
        })(r.a.Component)
      ;(S.propTypes = _), (S.Container = f), (S.Content = P), (S.Pane = A)
      n.a = S
    },
    65: function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'pageQuery', function() {
          return u
        })
      var a = t(0),
        i = t.n(a),
        o = t(3),
        r = t.n(o),
        l = t(93),
        s = t(101),
        c = function(e) {
          var n = e.data
          return i.a.createElement(
            l.a,
            null,
            i.a.createElement(s.b, {
              id: 'redux-tabs',
              data: n,
              defaultActiveKey: 'redux-actions',
            })
          )
        }
      c.propTypes = { data: r.a.object.isRequired }
      var u = '2398854890'
      n.default = c
    },
  },
])
//# sourceMappingURL=component---src-pages-redux-js-b2d9c329a1e3cf412565.js.map
