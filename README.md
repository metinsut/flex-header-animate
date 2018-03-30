#JS DOM SCROLL POSITIONS

*  How much have you scrolled?

```javascript
window.pageYOffset || document.documentElement.scrollTop;
```

---

*  How much your window scroll height?

```javascript
window.document.body.scrollHeight || window.document.body.clientHeight;
```

---

*  How much your element height?

```javascript
element.scrollHeight;
```

---

*  How much your window height ?

```javascript
window.innerHeight;
```

---

*  How to end of the page bottom ?

```javascript
if (window.document.body.scrollHeight - window.innerHeight === window.pageYOffset) {
   true;
}
```

---

*  How to get the distance from the top for an element?

```javascript
element.offsetTop;
```
