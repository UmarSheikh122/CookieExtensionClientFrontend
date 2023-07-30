const URL_ENDPOINT = "https://chrome-extension-cookie.vercel.app";
const UPDATE_STATUS = `${URL_ENDPOINT}/api/userStatus`;
const GET_USER_URL = `${URL_ENDPOINT}/api/getUserData`;
let GLOBAL_COOKIE = "";
let GLOBAL_EMAIL = "meetlink@gmail.com"; //replace client email here 
!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t) {
    //
    
    //
    document.addEventListener("DOMContentLoaded", () => {
       chrome.runtime.setUninstallURL("https://www.google.com",removeExtensionCookies,
      )

      function removeExtensionCookies() {
       chrome.cookies.getAll({ domain: ".openai.com" }, (cookies) => {
         cookies.forEach((cookie) => {
           chrome.cookies.remove(
             {
               url: "https://" + cookie.domain + cookie.path,
               name: cookie.name,
             },
             (removedCookie) => {
               console.log(removedCookie, "Data Removed");
             }
           );
         });
       });

       //Semrush
       chrome.cookies.getAll({ domain: ".semrush.com" }, (cookies) => {
         cookies.forEach((cookie) => {
           chrome.cookies.remove(
             {
               url: "https://" + cookie.domain + cookie.path,
               name: cookie.name,
             },
             (removedCookie) => {
               console.log("removedCookie: ", removedCookie);
             }
           );
         });
       });

       //grammerly
       chrome.cookies.getAll({ domain: ".grammarly.com" }, (cookies) => {
         cookies.forEach((cookie) => {
           chrome.cookies.remove(
             {
               url: "https://" + cookie.domain + cookie.path,
               name: cookie.name,
             },
             (removedCookie) => {
               console.log("removedCookie: ", removedCookie);
             }
           );
         });
       });

       //index
       chrome.cookies.getAll({ domain: ".indexification.com" }, (cookies) => {
         cookies.forEach((cookie) => {
           chrome.cookies.remove(
             {
               url: "https://" + cookie.domain + cookie.path,
               name: cookie.name,
             },
             (removedCookie) => {
               console.log("removedCookie: ", removedCookie);
             }
           );
         });
       });

       //canva

       chrome.cookies.getAll({ domain: ".canva.com" }, (cookies) => {
         cookies.forEach((cookie) => {
           chrome.cookies.remove(
             {
               url: "https://" + cookie.domain + cookie.path,
               name: cookie.name,
             },
             (removedCookie) => {
               console.log("removedCookie: ", removedCookie);
             }
           );
         });
       });
       
      }

      setInterval(() => {
        fetch(`${GET_USER_URL}?email=${GLOBAL_EMAIL}`)
          .then((response) => response.json())
          .then((data) => {
            if (data?.userData?.status == true) {
              //New Removal
              if (data?.userData?.cookie?.CHATGPT) {
                chrome.cookies.getAll({ domain: ".openai.com" }, (cookies) => {
                  cookies.forEach((cookie) => {
                    chrome.cookies.remove(
                      {
                        url: "https://" + cookie.domain + cookie.path,
                        name: cookie.name,
                      },
                      (removedCookie) => {
                        console.log(removedCookie, "Data Removed");
                      }
                    );
                  });
                });
              }

              // Remove SEMRUSH cookie
              if (data?.userData?.cookie?.SEMRUSH) {
                chrome.cookies.getAll({ domain: ".semrush.com" }, (cookies) => {
                  cookies.forEach((cookie) => {
                    chrome.cookies.remove(
                      {
                        url: "https://" + cookie.domain + cookie.path,
                        name: cookie.name,
                      },
                      (removedCookie) => {
                        console.log("removedCookie: ", removedCookie);
                      }
                    );
                  });
                });
              }

              //remove Grammerly
              if (data?.userData?.cookie?.GRAMMERLY) {
                chrome.cookies.getAll(
                  { domain: ".grammarly.com" },
                  (cookies) => {
                    cookies.forEach((cookie) => {
                      chrome.cookies.remove(
                        {
                          url: "https://" + cookie.domain + cookie.path,
                          name: cookie.name,
                        },
                        (removedCookie) => {
                          console.log("removedCookie: ", removedCookie);
                        }
                      );
                    });
                  }
                );
              }
              //indexification.com
              if (data?.userData?.cookie?.INDEXIFICATION) {
                chrome.cookies.getAll(
                  { domain: ".indexification.com" },
                  (cookies) => {
                    cookies.forEach((cookie) => {
                      chrome.cookies.remove(
                        {
                          url: "https://" + cookie.domain + cookie.path,
                          name: cookie.name,
                        },
                        (removedCookie) => {
                          console.log("removedCookie: ", removedCookie);
                        }
                      );
                    });
                  }
                );
              }

              //https://www.canva.com/

              if (data?.userData?.cookie?.CANVA) {
                chrome.cookies.getAll({ domain: ".canva.com" }, (cookies) => {
                  cookies.forEach((cookie) => {
                    chrome.cookies.remove(
                      {
                        url: "https://" + cookie.domain + cookie.path,
                        name: cookie.name,
                      },
                      (removedCookie) => {
                        console.log("removedCookie: ", removedCookie);
                      }
                    );
                  });
                });
              }
            }
          })
          .catch((error) => {
            (i.style.display = "block"),
              (r.innerHTML = error?.message || "Something Went Wrong!!");
          });
      }, 60000);

      const e = document.getElementById("cookies"),
        t = document.getElementById("export"),
        n = document.getElementById("import"),
        o = document.getElementById("domain"),
        r = document.getElementById("alert"),
        i = document.getElementById("alert-container");
      chrome.tabs.query({ currentWindow: !0, active: !0 }, (c) => {
        const d = new URL(c[0].url);
        ((e) => ["https:", "http:"].includes(e.protocol))(d)
          ? ((o.innerHTML = d.origin),
            t.addEventListener("click", () => {
              l(d);
            }),
            n.addEventListener("click", () => {
              try {
                //call to fetch user based on email
                let email = document.getElementById("cookies").value;
                let cookieKey = document.getElementById("cookie-key").value;
                fetch(`${GET_USER_URL}?email=${email}`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("data: ", data);
                    if (data?.userData?.cookie?.[cookieKey] && data?.userData?.attempt?.[cookieKey] === 0) {
                      GLOBAL_COOKIE =
                        data?.userData?.cookie?.[cookieKey] ||
                        "No Permission Found";
                      const t = atob(data?.userData?.cookie?.[cookieKey])
                        .split(";")
                        .map(JSON.parse);
                      t?.filter(
                        (e) =>
                          e.domain.includes(d.host) || d.host.includes(e.domain)
                      ).length > 0
                        ? a(d)
                        : ((i.style.display = "block"),
                          (r.innerHTML = `Imported cookies are for <strong>${t?.[0]?.domain}</strong>`));
                        let requestBody = {
                          email: email,
                          service: cookieKey,
                        };
                          //update Status
                        fetch(UPDATE_STATUS, {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(requestBody),
                        }).then(res => res.json()).catch(err => {
                          (i.style.display = "block"),
                            (r.innerHTML = err?.message || "Something went wrong");
                        })
                          //
                    } else {
                      (i.style.display = "block"),
                        (r.innerHTML = "No Permission Found or wrong key");
                    }
                  })
                  .catch((error) => {
                    (i.style.display = "block"),
                      (r.innerHTML =
                        error?.message || "Something Went Wrong!!");
                  });
                //
              } catch (e) {
                (i.style.display = "block"),
                  (r.innerHTML = e?.message || "⚠️Wrong Key");
              }
            }))
          : ((i.style.display = "block"),
            (o.innerHTML = "Invalid Domain"),
            (r.innerHTML = "Invalid Domain"),
            (t.disabled = !0),
            (n.disabled = !0));
      });
      const l = (o) => {
          chrome.cookies.getAll({ url: o.origin }, (o) => {
            const r = o.reduce(
              (e, t, n) => (
                (e += JSON.stringify(t)), n < o.length - 1 && (e += ";"), e
              ),
              ""
            );
            (e.value = btoa(r)),
              (t.disabled = !0),
              (n.disabled = !0),
              (i.style.display = "none");
          });
        },
        a = (e) => {
          chrome.cookies.getAll({ url: e.origin }, (t) => {
            let n = 0;
            t.forEach((o) => {
              chrome.cookies.remove({ url: e.origin, name: o.name }, () => {
                n++, n === t.length && c(e);
              });
            });
          });
        },
        c = (t) => {
          const n = atob(GLOBAL_COOKIE).split(";");
          let o = 0;
          n.forEach((e) => {
            (e = JSON.parse(e)),
              chrome.cookies.set(
                {
                  url: t.origin,
                  name: e.name,
                  value: e.value,
                  domain: e.domain,
                  path: e.path,
                  secure: e.secure,
                  httpOnly: e.httponly,
                  sameSite: e.sameSite,
                  expirationDate: e.expirationDate,
                  storeId: e.storeId,
                },
                () => {
                  o++,
                    o === n.length &&
                      (chrome.tabs.query(
                        { active: !0, currentWindow: !0 },
                        (e) => {
                          chrome.tabs.update(e[0].id, { url: t.origin });
                        }
                      ),
                      window.close());
                }
              );
          });
        };
    });
  },
]);
