;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    108: function(e, t, a) {
      'use strict'
      var n = a(266),
        r = a(0),
        i = a.n(r),
        c = a(3),
        l = a.n(c),
        o = a(267),
        s = a.n(o),
        u = a(121),
        d = a(298),
        m = a(624),
        p = a(625),
        f = a(24),
        h = a.n(f),
        E = a(155),
        y = a.n(E),
        g = a(73),
        b = a.n(g),
        v = a(634),
        x = a(623),
        w = function(e) {
          var t = e.active,
            a = e.disabled,
            n = e.className,
            r = y()(e, ['active', 'disabled', 'className'])
          return (
            delete r.onSelect,
            delete r.eventKey,
            delete r.activeKey,
            delete r.activeHref,
            i.a.createElement(
              'li',
              {
                role: 'presentation',
                className: b()(n, { active: t, disabled: a }),
              },
              i.a.createElement(u.Link, h()({}, r, { disabled: a }))
            )
          )
        },
        k = function(e) {
          var t = e.siteTitle
          return i.a.createElement(
            v.a,
            null,
            i.a.createElement(
              v.a.Header,
              null,
              i.a.createElement(
                v.a.Brand,
                null,
                i.a.createElement(u.Link, { to: '/' }, t)
              )
            ),
            i.a.createElement(
              v.a.Collapse,
              null,
              i.a.createElement(
                x.a,
                null,
                i.a.createElement(w, { to: '/ui' }, 'UI components'),
                i.a.createElement(w, { to: '/forms' }, 'Form'),
                i.a.createElement(w, { to: '/redux' }, 'Redux'),
                i.a.createElement(w, { to: '/utils' }, 'Utilities'),
                i.a.createElement(w, { to: '/api' }, 'API')
              )
            )
          )
        }
      k.propTypes = { siteTitle: l.a.string.isRequired }
      var q = k,
        R = a(94),
        T = a.n(R),
        N = function(e) {
          var t = e.repo,
            a = e.type
          return i.a.createElement(
            'span',
            { className: 'github-button-wrapper' },
            i.a.createElement('iframe', {
              title: a,
              src: 'https://ghbtns.com/github-btn.html?user=kayak&repo='
                .concat(t, '&type=')
                .concat(a),
              frameBorder: '0',
              scrolling: '0',
              width: '60px',
              height: '20px',
            })
          )
        },
        C = function(e) {
          var t = e.name,
            a = e.version
          return i.a.createElement(
            'footer',
            {
              style: {
                padding: '40px 0 20px',
                background: '#f8f8f8',
                borderTop: '1px solid #e7e7e7',
              },
            },
            i.a.createElement(
              d.a,
              null,
              i.a.createElement(
                m.a,
                { className: 'text-center' },
                i.a.createElement(
                  p.a,
                  { xs: 6, xsOffset: 3 },
                  i.a.createElement(N, { repo: t, type: 'star' }),
                  i.a.createElement(N, { repo: t, type: 'fork' })
                )
              ),
              i.a.createElement(
                m.a,
                { style: { marginTop: '20px' } },
                i.a.createElement(
                  p.a,
                  { xs: 12, className: 'text-center' },
                  i.a.createElement(
                    'p',
                    null,
                    'Copyright  ',
                    T()().format('YYYY'),
                    '  KAYAK Germany, GmbH'
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    'Licensed under the  ',
                    i.a.createElement(
                      'a',
                      { href: 'http://www.apache.org/licenses/LICENSE-2.0' },
                      'Apache License Version 2.0'
                    ),
                    ', Documentation built using  ',
                    i.a.createElement(
                      'a',
                      { href: 'https://gatsbyjs.org' },
                      'Gatsby'
                    )
                  ),
                  i.a.createElement(
                    'p',
                    { className: 'text-right' },
                    i.a.createElement('small', null, 'v'.concat(a))
                  )
                )
              )
            )
          )
        },
        G = (a(312),
        a(313),
        a(314),
        a(315),
        a(316),
        function(e) {
          var t = e.children,
            a = e.data.site,
            n = (void 0 === a ? {} : a).siteMetadata,
            r = void 0 === n ? {} : n
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              s.a,
              {
                title: r.title,
                meta: [
                  { name: 'description', content: r.description },
                  { name: 'keywords', content: 'kayak, react, redux' },
                ],
                script: [
                  {
                    type: 'text/javascript',
                    src: 'https://buttons.github.io/buttons.js',
                  },
                ],
              },
              i.a.createElement('html', { lang: 'en' }),
              i.a.createElement('link', {
                rel: 'canonical',
                href: 'https://kayak.github.io/bandit-pouch',
              })
            ),
            i.a.createElement(q, { siteTitle: r.title }),
            i.a.createElement(
              d.a,
              null,
              i.a.createElement(
                m.a,
                null,
                i.a.createElement(p.a, { xs: 12 }, t)
              )
            ),
            i.a.createElement(C, r.library)
          )
        })
      G.propTypes = {
        data: l.a.object.isRequired,
        children: l.a.node.isRequired,
      }
      var L = function(e) {
        var t = e.children
        return i.a.createElement(u.StaticQuery, {
          query: '2212968517',
          render: function(e) {
            return i.a.createElement(G, { data: e }, t)
          },
          data: n,
        })
      }
      L.propTypes = { children: l.a.node.isRequired }
      t.a = L
    },
    121: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return f
        }),
        a.d(t, 'StaticQueryContext', function() {
          return m
        }),
        a.d(t, 'StaticQuery', function() {
          return p
        })
      var n = a(0),
        r = a.n(n),
        i = a(3),
        c = a.n(i),
        l = a(101),
        o = a.n(l)
      a.d(t, 'Link', function() {
        return o.a
      }),
        a.d(t, 'withPrefix', function() {
          return l.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return l.navigate
        }),
        a.d(t, 'push', function() {
          return l.push
        }),
        a.d(t, 'replace', function() {
          return l.replace
        }),
        a.d(t, 'navigateTo', function() {
          return l.navigateTo
        })
      var s = a(215),
        u = a.n(s)
      a.d(t, 'PageRenderer', function() {
        return u.a
      })
      var d = a(20)
      a.d(t, 'parsePath', function() {
        return d.a
      })
      var m = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: c.a.object,
        query: c.a.string.isRequired,
        render: c.a.func,
        children: c.a.func,
      }
    },
    215: function(e, t, a) {
      var n
      e.exports = ((n = a(265)) && n.default) || n
    },
    265: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(11),
        r = a.n(n),
        i = a(0),
        c = a.n(i),
        l = a(3),
        o = a.n(l),
        s = a(29),
        u = a(2),
        d = function(e) {
          var t = e.location,
            a = u.default.getResourcesForPathnameSync(t.pathname)
          return c.a.createElement(
            s.a,
            r()({ location: t, pageResources: a }, a.json)
          )
        }
      ;(d.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = d)
    },
    266: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Bandit Pouch',
              description: 'Common React components and utilities',
              library: { name: 'bandit-pouch', version: '1.3.1' },
            },
          },
        },
      }
    },
    315: function(e, t, a) {},
    316: function(e, t, a) {},
  },
])
//# sourceMappingURL=1-ee2092d5794f2b2b9b35.js.map
