/* @ds-bundle: {"format":4,"namespace":"ScoutDesignSystem_235301","components":[{"name":"ScoutMark","sourcePath":"components/brand/ScoutMark.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CheckList","sourcePath":"components/content/CheckList.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"Pill","sourcePath":"components/content/Pill.jsx"},{"name":"SpecRow","sourcePath":"components/content/SpecRow.jsx"},{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"SegmentedControl","sourcePath":"components/controls/SegmentedControl.jsx"},{"name":"Slider","sourcePath":"components/controls/Slider.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"SectionHeader","sourcePath":"components/typography/SectionHeader.jsx"},{"name":"Stat","sourcePath":"components/typography/Stat.jsx"}],"sourceHashes":{"components/brand/ScoutMark.jsx":"85b24ffb8a5a","components/content/Badge.jsx":"57f16200eac9","components/content/Callout.jsx":"43378efa7ab4","components/content/Card.jsx":"af33b4933562","components/content/CheckList.jsx":"df8542f0c5a1","components/content/Divider.jsx":"6e77bb6cc0c4","components/content/Pill.jsx":"ec8a6750f890","components/content/SpecRow.jsx":"85dccc61ece0","components/controls/Button.jsx":"320bd0038f19","components/controls/SegmentedControl.jsx":"874191286b22","components/controls/Slider.jsx":"9fdcbdcc565e","components/typography/Eyebrow.jsx":"de573c27651a","components/typography/SectionHeader.jsx":"9d96c4e33c34","components/typography/Stat.jsx":"d60f263435d2","ui_kits/scout/Article.jsx":"2ccc08112c14","ui_kits/scout/parts.jsx":"e002b410fe1e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ScoutDesignSystem_235301 = window.ScoutDesignSystem_235301 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ScoutMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutMark — the Scout wordmark, rendered in type (no logo file exists).
 * A serif wordmark with a trailing period, the publication's signature.
 */
function ScoutMark({
  size = 26,
  color,
  tone = 'ink',
  as: Tag = 'span',
  style,
  ...rest
}) {
  const resolved = color || (tone === 'inverse' ? 'var(--paper-0)' : 'var(--text-heading)');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: typeof size === 'number' ? `${size}px` : size,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: resolved,
      display: 'inline-block',
      ...style
    }
  }, rest), "Scout", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "."));
}
Object.assign(__ds_scope, { ScoutMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScoutMark.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small cream label pill, used for dates and meta ("10 июля 2026").
 * Lighter weight than Pill; sits inline with byline / reading-time text.
 */
function Badge({
  children,
  tone = 'cream',
  style,
  ...rest
}) {
  const tones = {
    cream: {
      background: 'var(--bg-cream)',
      color: 'var(--text-on-cream)',
      border: '1px solid var(--cream-1)'
    },
    line: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      lineHeight: 1,
      padding: '6px 11px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — the warm-gray insight box with a thick gold left bar, used for
 * the key takeaways ("Главный инсайт…", "Получается замкнутый круг…").
 * Serif body; supports rich children including <strong>.
 */
function Callout({
  children,
  bar = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      background: 'var(--bg-muted)',
      borderLeft: bar ? 'var(--bw-bar) solid var(--quote-bar)' : 'none',
      padding: 'var(--pad-callout)',
      borderRadius: bar ? '0 var(--radius-sm) var(--radius-sm) 0' : 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/CheckList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CheckList — Scout's gold-marker list. marker='check' renders a gold ✓
 * (as in the "Решение" steps); marker='diamond' renders a gold outline ◇
 * (as in the "Проблема" two-column lists). Accepts an array of items or
 * <CheckList.Item> children.
 */
function CheckList({
  items,
  marker = 'check',
  columns = 1,
  gap = 'var(--space-3)',
  children,
  style,
  ...rest
}) {
  const glyph = marker === 'diamond' ? '◇' : '✓';
  const rows = items ? items.map((it, i) => /*#__PURE__*/React.createElement(Item, {
    key: i
  }, it)) : children;
  return /*#__PURE__*/React.createElement("ul", _extends({
    "data-marker": marker,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: columns > 1 ? `repeat(${columns}, minmax(0,1fr))` : '1fr',
      columnGap: 'var(--space-8)',
      rowGap: gap,
      ...style
    }
  }, rest), React.Children.map(rows, child => child && child.type === Item ? React.cloneElement(child, {
    glyph
  }) : /*#__PURE__*/React.createElement(Item, {
    glyph: glyph
  }, child)));
}
function Item({
  children,
  glyph = '✓',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.7em',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--accent)',
      flex: 'none',
      fontSize: '0.9em'
    }
  }, glyph), /*#__PURE__*/React.createElement("span", null, children));
}
CheckList.Item = Item;
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — the thin warm-gray section rule that separates Scout article
 * sections. Optional generous vertical spacing built in.
 */
function Divider({
  spacing = 'var(--space-9)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: '1px solid var(--rule)',
      margin: `${spacing} 0`,
      maxWidth: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill — a small capability / topic chip: cream background, deep-gold text,
 * fully rounded. As used in "Что умеет платформа: найти заказ · …".
 */
function Pill({
  children,
  tone = 'cream',
  style,
  ...rest
}) {
  const tones = {
    cream: {
      background: 'var(--bg-cream)',
      color: 'var(--text-on-cream)',
      border: '1px solid var(--cream-1)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border)'
    },
    solid: {
      background: 'var(--ink-0)',
      color: 'var(--paper-0)',
      border: '1px solid var(--ink-0)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1,
      padding: '9px 15px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pill.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpecRow — a label/value line with a hairline divider, used for spec tables
 * ("Страна · США") and numbered timelines ("Неделя 1 · Выбрать отрасль").
 * The label sits in a fixed-width muted column; the value fills the rest.
 * Render several in a column to form a table.
 */
function SpecRow({
  label,
  children,
  value,
  labelWidth = '150px',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `${labelWidth} 1fr`,
      gap: 'var(--space-6)',
      alignItems: 'baseline',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'oldstyle-nums'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-snug)'
    }
  }, children ?? value));
}
Object.assign(__ds_scope, { SpecRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecRow.jsx", error: String((e && e.message) || e) }); }

// components/controls/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Scout's understated button. 'outline' (default) is the header
 * "Подписаться" style: transparent fill, hairline border, ink text that
 * fills gold on hover. 'solid' is ink-filled; 'ghost' is text-only; 'gold'
 * is the accent fill. Near-square corners, serif label.
 */
function Button({
  children,
  variant = 'outline',
  size = 'md',
  as: Tag = 'button',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '7px 14px',
      fontSize: 'var(--fs-small)'
    },
    md: {
      padding: '11px 22px',
      fontSize: 'var(--fs-body-sm)'
    },
    lg: {
      padding: '14px 30px',
      fontSize: 'var(--fs-body)'
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    transition: 'var(--transition)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5em',
    textDecoration: 'none',
    border: '1px solid transparent',
    ...sizes[size]
  };
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--text-heading)',
      borderColor: 'var(--border-strong)'
    },
    solid: {
      background: 'var(--ink-0)',
      color: 'var(--paper-0)',
      borderColor: 'var(--ink-0)'
    },
    gold: {
      background: 'var(--accent)',
      color: 'var(--paper-0)',
      borderColor: 'var(--accent)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)',
      borderColor: 'transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? {
    outline: {
      borderColor: 'var(--accent)',
      color: 'var(--accent)'
    },
    solid: {
      background: 'var(--ink-1)'
    },
    gold: {
      background: 'var(--accent-deep)',
      borderColor: 'var(--accent-deep)'
    },
    ghost: {
      color: 'var(--accent)'
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedControl — the row of bordered boxes used to switch years
 * ("2023 · 2024 · 2025") and steps ("1…6"). The active box takes a gold
 * border, cream fill and gold text. Controlled via `value`/`onChange`, or
 * uncontrolled with `defaultValue`.
 */
function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const norm = (options || []).map(o => typeof o === 'object' ? o : {
    value: o,
    label: String(o)
  });
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const active = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const dims = size === 'sm' ? {
    minWidth: 40,
    padding: '8px 12px',
    fontSize: 'var(--fs-small)'
  } : {
    minWidth: 54,
    padding: '11px 20px',
    fontSize: 'var(--fs-body-sm)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), norm.map(o => {
    const on = o.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      "aria-pressed": on,
      onClick: () => pick(o.value),
      style: {
        fontFamily: 'var(--font-body)',
        fontVariantNumeric: 'oldstyle-nums',
        minWidth: dims.minWidth,
        padding: dims.padding,
        fontSize: dims.fontSize,
        lineHeight: 1,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        transition: 'var(--transition)',
        border: on ? '1px solid var(--accent)' : '1px solid var(--border-strong)',
        background: on ? 'var(--bg-cream)' : 'transparent',
        color: on ? 'var(--text-on-cream)' : 'var(--text-secondary)',
        fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-regular)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/controls/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Slider — the calculator range control: a black track with a gold filled
 * portion and a gold round thumb, plus an inline label and oldstyle value.
 * Controlled via `value`/`onChange`. `format` renders the value read-out.
 */
function Slider({
  label,
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  format = v => v,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? min);
  const val = value !== undefined ? value : internal;
  const pct = (val - min) / (max - min) * 100;
  const set = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const id = React.useId();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), label != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariantNumeric: 'oldstyle-nums',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)',
      letterSpacing: '0.04em'
    }
  }, format(val))), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: val,
    onChange: e => set(Number(e.target.value)),
    className: "scout-slider",
    style: {
      width: '100%',
      background: `linear-gradient(var(--accent), var(--accent)) 0/${pct}% 100% no-repeat var(--black)`
    }
  }), /*#__PURE__*/React.createElement("style", null, `
        .scout-slider{ -webkit-appearance:none; appearance:none; height:4px; border-radius:999px; outline:none; cursor:pointer; }
        .scout-slider::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:18px; height:18px; border-radius:999px; background:var(--accent); border:none; box-shadow:0 0 0 3px var(--bg-page); cursor:pointer; }
        .scout-slider::-moz-range-thumb{ width:18px; height:18px; border:none; border-radius:999px; background:var(--accent); box-shadow:0 0 0 3px var(--bg-page); cursor:pointer; }
        .scout-slider::-moz-range-track{ height:4px; border-radius:999px; background:var(--black); }
      `));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Slider.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the small uppercase, letter-spaced label that opens every
 * Scout section. Optional leading number (e.g. "04") shown in accent gold,
 * as seen above section titles: "04  ОЦЕНКА И РОСТ".
 */
function Eyebrow({
  number,
  children,
  color,
  as: Tag = 'div',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-medium)',
      color: color || 'var(--text-label)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.9em',
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em'
    }
  }, number), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the flat bordered surface used throughout Scout: white fill, hairline
 * warm-gray border, near-square corners, no shadow. Optional gold eyebrow
 * label (e.g. "СООСНОВАТЕЛЬ", "РУКОВОДИТЕЛЮ") and optional gold index number
 * (as on the "01 Огромный рынок" feature cards).
 */
function Card({
  label,
  number,
  title,
  children,
  tone = 'surface',
  labelColor = 'var(--accent)',
  style,
  ...rest
}) {
  const tones = {
    surface: {
      background: 'var(--bg-surface)'
    },
    subtle: {
      background: 'var(--bg-subtle)'
    },
    muted: {
      background: 'var(--bg-muted)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--pad-card)',
      ...tones[tone],
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-small)',
      color: 'var(--accent)',
      letterSpacing: '0.08em',
      marginBottom: 'var(--space-4)'
    }
  }, number), label && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: labelColor,
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, label), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-3)',
      letterSpacing: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — the standard opening of a Scout article section:
 * an Eyebrow (number + label), a large serif title, and an optional lead
 * paragraph. Reproduces the "01 БИЗНЕС ЗА 60 СЕКУНД → title → lead" pattern.
 */
function SectionHeader({
  number,
  eyebrow,
  title,
  lead,
  size = 'h2',
  align = 'left',
  style,
  ...rest
}) {
  const titleSize = size === 'hero' ? 'var(--fs-hero)' : size === 'h1' ? 'var(--fs-h1)' : 'var(--fs-h2)';
  const titleLh = size === 'hero' || size === 'h1' ? 'var(--lh-tight)' : 'var(--lh-snug)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      marginBottom: 'var(--space-6)',
      ...style
    }
  }, rest), (eyebrow || number != null) && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    number: number,
    style: {
      marginBottom: 'var(--space-4)',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: titleSize,
      lineHeight: titleLh,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-secondary)',
      margin: 'var(--space-4) 0 0',
      maxWidth: 'var(--measure)',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/typography/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a large oldstyle-numeral figure with a small label, as used for
 * scores ("9,5/10") and prices ("0,5–0,8 млн ₽"). The value sits in the
 * display serif; an optional suffix (e.g. "/10") trails in a muted tone.
 */
function Stat({
  value,
  suffix,
  label,
  size = 'var(--fs-stat)',
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-secondary)',
      marginBottom: 'var(--space-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size,
      lineHeight: 1,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-heading)',
      letterSpacing: '0.01em',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      gap: '0.06em'
    }
  }, /*#__PURE__*/React.createElement("span", null, value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.42em',
      color: 'var(--text-faint)',
      letterSpacing: '0.06em'
    }
  }, suffix)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scout/Article.jsx
try { (() => {
/* Scout UI kit — the full article, recreating the Decagon AI разбор.
 * Composes design-system primitives (window.ScoutDesignSystem_235301) with
 * the shared parts. Exposes window.ScoutArticle + the TOC model. */

const A = window.ScoutDesignSystem_235301;
const TOC = [{
  id: 'sec-intro',
  label: 'Вступление'
}, {
  id: 'sec-60',
  label: 'Бизнес за 60 секунд'
}, {
  id: 'sec-company',
  label: 'Компания'
}, {
  id: 'sec-founders',
  label: 'Основатели'
}, {
  id: 'sec-growth',
  label: 'Оценка и рост'
}, {
  id: 'sec-problem',
  label: 'Проблема'
}, {
  id: 'sec-solution',
  label: 'Решение'
}, {
  id: 'sec-how',
  label: 'Как работает'
}, {
  id: 'sec-value',
  label: 'Почему это сильно'
}, {
  id: 'sec-model',
  label: 'Бизнес-модель'
}, {
  id: 'sec-grow',
  label: 'Почему растёт'
}, {
  id: 'sec-mvp',
  label: 'MVP и запуск'
}, {
  id: 'sec-verdict',
  label: 'Вывод'
}];
function Sec({
  id,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": label,
    className: "scout-sec"
  }, children);
}
function MediaSlot({
  label,
  ratio = '21 / 9',
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scout-media",
    style: {
      aspectRatio: ratio,
      background: dark ? 'var(--ink-0)' : 'var(--paper-0)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--paper-4)' : 'var(--text-faint)'
    }
  }, label));
}
function ScoutArticle() {
  return /*#__PURE__*/React.createElement("article", {
    className: "scout-article",
    id: "top"
  }, /*#__PURE__*/React.createElement(Sec, {
    id: "sec-intro",
    label: "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    size: "hero",
    eyebrow: "Scout \xB7 \u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432",
    title: "Decagon AI"
  }), /*#__PURE__*/React.createElement("p", {
    className: "scout-lead"
  }, "\u041A\u0430\u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C\u044E \u0431\u043E\u043B\u0435\u0435 ", /*#__PURE__*/React.createElement("strong", null, "$10 \u043C\u043B\u0440\u0434"), " \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442 \u0432 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 \u0441\u043B\u0443\u0436\u0431\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438."), /*#__PURE__*/React.createElement("p", null, "Decagon \u0441\u043E\u0437\u0434\u0430\u0451\u0442 AI-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0430\u0437\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u044E\u0442 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438, \u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u043D\u0443\u0442\u0440\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430: \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u0442 \u0437\u0430\u043A\u0430\u0437\u044B, \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u044E\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u044B, \u043C\u0435\u043D\u044F\u044E\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0438 \u0438\u0449\u0443\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0432 CRM \u2014 \u0442\u0430\u043A, \u0441\u043B\u043E\u0432\u043D\u043E \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u043E\u043F\u044B\u0442\u043D\u044B\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438."), /*#__PURE__*/React.createElement(A.Callout, null, /*#__PURE__*/React.createElement("em", null, "\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u043E\u0445\u043E\u0436\u0438\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u2014 \u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C?")), /*#__PURE__*/React.createElement("div", {
    className: "scout-byline"
  }, /*#__PURE__*/React.createElement("span", null, "\u0410\u0440\u0442\u0451\u043C \u0422\u0443\u043F\u0438\u043A\u043E\u0432"), /*#__PURE__*/React.createElement(A.Badge, null, "10 \u0438\u044E\u043B\u044F 2026"), /*#__PURE__*/React.createElement("span", {
    className: "scout-byline__read"
  }, "\u2248 12 \u043C\u0438\u043D \u0447\u0442\u0435\u043D\u0438\u044F"))), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-60",
    label: "\u0411\u0438\u0437\u043D\u0435\u0441 \u0437\u0430 60 \u0441\u0435\u043A\u0443\u043D\u0434"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "01",
    eyebrow: "\u0411\u0438\u0437\u043D\u0435\u0441 \u0437\u0430 60 \u0441\u0435\u043A\u0443\u043D\u0434",
    title: "AI, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442, \u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"
  }), /*#__PURE__*/React.createElement("p", null, "Decagon \u2014 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0434\u043B\u044F \u0441\u043B\u0443\u0436\u0431\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438. \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043A \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0448\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0445 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0439."), /*#__PURE__*/React.createElement("p", {
    className: "scout-mini-h"
  }, "\u0427\u0442\u043E \u0443\u043C\u0435\u0435\u0442 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430:"), /*#__PURE__*/React.createElement("div", {
    className: "scout-pills"
  }, ['найти заказ', 'проверить доставку', 'оформить возврат', 'изменить подписку', 'искать в базе знаний', 'открыть обращение в CRM', 'передать вопрос человеку'].map(p => /*#__PURE__*/React.createElement(A.Pill, {
    key: p
  }, p))), /*#__PURE__*/React.createElement(A.Callout, {
    bar: false
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0443\u0441\u043F\u0435\u0445\u0430 \u043F\u0440\u043E\u0441\u0442\u0430: \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0451\u0442 ", /*#__PURE__*/React.createElement("strong", null, "\u043D\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442"), ", \u0430 \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432, \u0431\u043E\u043B\u0435\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u0439\u043C\u0430 \u043D\u043E\u0432\u044B\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432.")), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-company",
    label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    label: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    ratio: "21 / 7"
  }), /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "02",
    eyebrow: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
    title: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E Decagon",
    style: {
      marginTop: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "scout-table"
  }, /*#__PURE__*/React.createElement(A.SpecRow, {
    label: "\u0421\u0442\u0440\u0430\u043D\u0430"
  }, "\u0421\u0428\u0410"), /*#__PURE__*/React.createElement(A.SpecRow, {
    label: "\u0413\u043E\u0434 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F"
  }, "2023"), /*#__PURE__*/React.createElement(A.SpecRow, {
    label: "\u041E\u0446\u0435\u043D\u043A\u0430"
  }, "\u0431\u043E\u043B\u0435\u0435 $10 \u043C\u043B\u0440\u0434 (\u043F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C \u0440\u0430\u0443\u043D\u0434\u0430\u043C)"), /*#__PURE__*/React.createElement(A.SpecRow, {
    label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442"
  }, "AI-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"), /*#__PURE__*/React.createElement(A.SpecRow, {
    label: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
  }, "SaaS, \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u0444\u0438\u043D\u0442\u0435\u0445, \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u044B, \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0435 \u0438 tech-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), /*#__PURE__*/React.createElement(A.SpecRow, {
    label: "\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F"
  }, "\u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u044B\u043D\u043E\u043A \u2014 \u0421\u0428\u0410, \u0435\u0441\u0442\u044C \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B"), /*#__PURE__*/React.createElement(A.SpecRow, {
    label: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
  }, "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442"))), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-founders",
    label: "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u0438"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "03",
    eyebrow: "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
    title: "\u041A\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scout-2col"
  }, /*#__PURE__*/React.createElement(A.Card, {
    label: "\u0421\u043E\u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
    title: "\u0414\u0436\u0435\u0441\u0441\u0438 \u0427\u0436\u0430\u043D \xB7 Jesse Zhang"
  }, "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0441\u044F \u0441 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u043C \u0432 \u0421\u0442\u044D\u043D\u0444\u043E\u0440\u0434\u0435. \u0414\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 AI-\u043C\u043E\u0434\u0435\u043B\u044F\u043C\u0438."), /*#__PURE__*/React.createElement(A.Card, {
    label: "\u0421\u043E\u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
    title: "\u0410\u0448\u0432\u0438\u043D \u0421\u0440\u0438\u0440\u0430\u043C \xB7 Ashwin Sriram"
  }, "\u0412\u043C\u0435\u0441\u0442\u0435 \u0441 \u0414\u0436\u0435\u0441\u0441\u0438 \u0437\u0430\u043C\u0435\u0442\u0438\u043B \u043A\u043B\u044E\u0447\u0435\u0432\u0443\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0440\u044B\u043D\u043A\u0430 AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u043E\u0432.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0443\u043C\u0435\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043D\u043E \u043F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u043B\u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432\u043D\u0443\u0442\u0440\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0418\u043C\u0435\u043D\u043D\u043E \u043D\u0430 \u044D\u0442\u043E\u0439 \u0438\u0434\u0435\u0435 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D \u0432\u0435\u0441\u044C Decagon: \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043B\u0430 AI, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0430\u0437\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u0442, \u0430 ", /*#__PURE__*/React.createElement("strong", null, "\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"), "."), /*#__PURE__*/React.createElement(MediaSlot, {
    label: "\u0424\u043E\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",
    ratio: "16 / 9"
  })), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-growth",
    label: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438 \u0440\u043E\u0441\u0442"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "04",
    eyebrow: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438 \u0440\u043E\u0441\u0442",
    title: "\u041E\u0434\u0438\u043D \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u0432\u0437\u043B\u0451\u0442\u043E\u0432 \u0441\u0440\u0435\u0434\u0438 AI-\u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432",
    lead: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0433\u043E\u0434, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u043B\u043E."
  }), /*#__PURE__*/React.createElement(window.GrowthPicker, null)), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-problem",
    label: "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "05",
    eyebrow: "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
    title: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0441\u043E\u0442\u043D\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"
  }), /*#__PURE__*/React.createElement("p", null, "\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443 \u043B\u044E\u0431\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0435\u0441\u0442\u044C \u0441\u043B\u0443\u0436\u0431\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438, \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0442\u0441\u044F \u0438\u0437\u043E \u0434\u043D\u044F \u0432 \u0434\u0435\u043D\u044C: \u0433\u0434\u0435 \u0437\u0430\u043A\u0430\u0437, \u043A\u043E\u0433\u0434\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430, \u043A\u0430\u043A \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0442\u043E\u0432\u0430\u0440, \u043A\u0430\u043A \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0432\u044B\u043D\u0443\u0436\u0434\u0435\u043D\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043E\u0442\u0434\u0435\u043B\u044B, \u0445\u043E\u0442\u044F \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C."), /*#__PURE__*/React.createElement("div", {
    className: "scout-2col"
  }, /*#__PURE__*/React.createElement(A.Card, {
    label: "\u0414\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430"
  }, /*#__PURE__*/React.createElement(A.CheckList, {
    marker: "diamond",
    items: ['большие расходы на зарплаты', 'постоянный найм новых сотрудников', 'долгое обучение операторов', 'ошибки из-за человеческого фактора', 'сложности при масштабировании']
  })), /*#__PURE__*/React.createElement(A.Card, {
    label: "\u0414\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
  }, /*#__PURE__*/React.createElement(A.CheckList, {
    marker: "diamond",
    items: ['долгое ожидание ответа', 'ответы разного качества', 'нужно несколько раз объяснять проблему', 'недовольство сервисом']
  }))), /*#__PURE__*/React.createElement(A.Callout, {
    bar: false
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u043A\u043D\u0443\u0442\u044B\u0439 \u043A\u0440\u0443\u0433: \u0431\u043E\u043B\u044C\u0448\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u2192 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u2192 \u0432\u044B\u0448\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u2192 \u043D\u0438\u0436\u0435 \u043F\u0440\u0438\u0431\u044B\u043B\u044C. ", /*#__PURE__*/React.createElement("strong", null, "\u0418\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u0442 \u043A\u0440\u0443\u0433 Decagon \u043F\u044B\u0442\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u043E\u0440\u0432\u0430\u0442\u044C."))), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-solution",
    label: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "06",
    eyebrow: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435",
    title: "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0443\u0442\u0438\u043D\u0443, \u0430 \u043D\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430"
  }), /*#__PURE__*/React.createElement("p", null, "\u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B AI \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u2014 CRM, \u0431\u0430\u0437\u0435 \u0437\u043D\u0430\u043D\u0438\u0439, \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438, \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438. \u0415\u0441\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439, \u0434\u0438\u0430\u043B\u043E\u0433 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F \u0436\u0438\u0432\u043E\u043C\u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0443."), /*#__PURE__*/React.createElement("p", {
    className: "scout-mini-h"
  }, "\u041A\u043B\u0438\u0435\u043D\u0442 \u043F\u0438\u0448\u0435\u0442 \xAB\u0413\u0434\u0435 \u043C\u043E\u0439 \u0437\u0430\u043A\u0430\u0437?\xBB \u2014 \u0438 Decagon:"), /*#__PURE__*/React.createElement(A.CheckList, {
    items: ['находит заказ;', 'проверяет статус доставки;', 'определяет предполагаемую дату получения;', 'формирует ответ;', 'отправляет его клиенту.']
  }), /*#__PURE__*/React.createElement(MediaSlot, {
    label: "Demo \xB7 Decagon",
    ratio: "16 / 9",
    dark: true
  })), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-how",
    label: "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "07",
    eyebrow: "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442",
    title: "\u041F\u0443\u0442\u044C \u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F",
    lead: "\u0421 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432\u0441\u0451 \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u043E\u0441\u0442\u043E. \u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0448\u0430\u0433\u0430\u043C."
  }), /*#__PURE__*/React.createElement(window.StepFlow, null)), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-value",
    label: "\u041F\u043E\u0447\u0435\u043C\u0443 \u044D\u0442\u043E \u0441\u0438\u043B\u044C\u043D\u043E"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "08",
    eyebrow: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u0434\u0435\u044F \u0441\u0438\u043B\u044C\u043D\u0430\u044F",
    title: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0451\u0442 \u043D\u0435 AI, \u0430 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scout-3col"
  }, /*#__PURE__*/React.createElement(A.Card, {
    label: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E"
  }, /*#__PURE__*/React.createElement(A.CheckList, {
    items: ['снижение расходов', 'больше клиентов без роста штата', 'работа 24/7', 'предсказуемое качество']
  })), /*#__PURE__*/React.createElement(A.Card, {
    label: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C"
  }, /*#__PURE__*/React.createElement(A.CheckList, {
    items: ['меньше однотипной работы', 'фокус на сложных вопросах', 'снижение нагрузки']
  })), /*#__PURE__*/React.createElement(A.Card, {
    label: "\u041A\u043B\u0438\u0435\u043D\u0442\u0430\u043C"
  }, /*#__PURE__*/React.createElement(A.CheckList, {
    items: ['быстрые ответы', 'отсутствие очередей', 'единый стандарт сервиса']
  })))), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-model",
    label: "\u0411\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u044C"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "09",
    eyebrow: "\u0427\u0430\u0441\u0442\u044C 2 \xB7 \u0411\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u044C",
    title: "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u0441\u0430\u043C\u0438",
    lead: "Decagon \u0431\u0435\u0440\u0451\u0442 \u043D\u0430 \u0441\u0435\u0431\u044F 60\u201380% \u0442\u0438\u043F\u043E\u0432\u044B\u0445 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0439. \u041F\u043E\u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0438 \u2014 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u043F\u043E\u043A\u0430\u0436\u0435\u0442, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u0440\u044F\u0435\u0442 \u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442 \u0431\u0438\u0437\u043D\u0435\u0441."
  }), /*#__PURE__*/React.createElement(window.Calculator, null)), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-grow",
    label: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0440\u0430\u0441\u0442\u0451\u0442"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "12",
    eyebrow: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441 \u0440\u0430\u0441\u0442\u0451\u0442",
    title: "\u0421\u0435\u043C\u044C \u043F\u0440\u0438\u0447\u0438\u043D, \u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \xAB\u0445\u0430\u0439\u043F AI\xBB"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scout-grid2"
  }, [['01', 'Огромный рынок', 'Почти каждая средняя и крупная компания имеет поддержку — миллионы потенциальных клиентов.'], ['02', 'Понятная ценность', 'Было 100 операторов — стало 40. Экономию не нужно объяснять.'], ['03', 'AI наконец поумнел', 'Современные модели понимают контекст и работают с документами. Рынок появился только сейчас.'], ['04', 'Продаёт результат', 'Не «у нас умная модель», а «мы сократим ваши расходы».'], ['05', 'Высокий порог входа', 'Красивый чат сделает любой. Безопасно работать с CRM, платежами и заказами — куда сложнее.'], ['06', 'Повторные продажи', 'Сначала поддержка, потом продажи, Help Desk, HR, финансы. Клиент покупает всё больше.'], ['07', 'Рост рынка AI', 'Каждая крупная компания ищет способ внедрить AI. Decagon оказался в нужном месте в нужное время.']].map(([n, t, d]) => /*#__PURE__*/React.createElement(A.Card, {
    key: n,
    number: n,
    title: t
  }, d)))), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-mvp",
    label: "MVP \u0438 \u0437\u0430\u043F\u0443\u0441\u043A"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "15",
    eyebrow: "MVP \u0438 \u0437\u0430\u043F\u0443\u0441\u043A",
    title: "MVP \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0437\u0430 8 \u043D\u0435\u0434\u0435\u043B\u044C"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scout-table"
  }, [['Неделя 1', 'Выбрать одну отрасль (например, стоматологии)'], ['Неделя 2', '20 интервью: какие вопросы клиенты задают чаще всего'], ['Неделя 3', 'Собрать базу знаний, документы, типовые ответы'], ['Неделя 4', 'Подключить AI через готовые модели (OpenAI, Anthropic или российские LLM)'], ['Неделя 5', 'Подключить Telegram'], ['Неделя 6', 'Подключить CRM'], ['Неделя 7', 'Запустить первого клиента'], ['Неделя 8', 'Посчитать результат — доказан ли эффект']].map(([w, t]) => /*#__PURE__*/React.createElement(A.SpecRow, {
    key: w,
    label: w
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0443\u0436\u043D\u043E \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u0441\u0442\u0430\u0440\u0442"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, "\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0430. \u0422\u043E\u0447\u043D\u044B\u0435 \u0441\u0443\u043C\u043C\u044B \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0438 \u043E\u0442\u0440\u0430\u0441\u043B\u0438."), /*#__PURE__*/React.createElement("div", {
    className: "scout-3col"
  }, /*#__PURE__*/React.createElement(A.Card, {
    label: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439"
  }, /*#__PURE__*/React.createElement(A.Stat, {
    value: "0,5\u20130,8 \u043C\u043B\u043D \u20BD",
    size: "30px"
  }), /*#__PURE__*/React.createElement("p", {
    className: "scout-tier-t"
  }, "MVP, \u0434\u0438\u0437\u0430\u0439\u043D, AI-\u043C\u043E\u0434\u0435\u043B\u044C, Telegram-\u0431\u043E\u0442, \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0441\u0430\u0439\u0442, \u043F\u0435\u0440\u0432\u044B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0415\u0441\u043B\u0438 \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u043C \u043F\u0440\u043E\u0434\u0430\u0451\u0442.")), /*#__PURE__*/React.createElement(A.Card, {
    label: "\u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439"
  }, /*#__PURE__*/React.createElement(A.Stat, {
    value: "2\u20134 \u043C\u043B\u043D \u20BD",
    size: "30px"
  }), /*#__PURE__*/React.createElement("p", {
    className: "scout-tier-t"
  }, "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 CRM, \u043F\u0438\u043B\u043E\u0442\u044B, \u0441\u0442\u0430\u0440\u0442 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430.")), /*#__PURE__*/React.createElement(A.Card, {
    label: "\u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439"
  }, /*#__PURE__*/React.createElement(A.Stat, {
    value: "8\u201315 \u043C\u043B\u043D \u20BD",
    size: "30px"
  }), /*#__PURE__*/React.createElement("p", {
    className: "scout-tier-t"
  }, "\u0421\u0438\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439, \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438, \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435.")))), /*#__PURE__*/React.createElement(A.Divider, null), /*#__PURE__*/React.createElement(Sec, {
    id: "sec-verdict",
    label: "\u0412\u044B\u0432\u043E\u0434"
  }, /*#__PURE__*/React.createElement(A.SectionHeader, {
    number: "16",
    eyebrow: "\u0412\u044B\u0432\u043E\u0434",
    title: "\u041D\u0435 \u043D\u043E\u0432\u0430\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F, \u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
  }), /*#__PURE__*/React.createElement("p", null, "Decagon \u2014 \u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0444\u043E\u043A\u0443\u0441 \u043D\u0430 \u0431\u043E\u043B\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043C\u043D\u043E\u0433\u043E\u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u043D\u0443\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E. \u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043F\u0440\u043E\u0434\u0430\u044E\u0442 AI-\u0447\u0430\u0442, \u043D\u043E \u043D\u0430 \u0434\u0435\u043B\u0435 \u043F\u0440\u043E\u0434\u0430\u044E\u0442 \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432, \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0435\u0437 \u0440\u043E\u0441\u0442\u0430 \u0448\u0442\u0430\u0442\u0430 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430."), /*#__PURE__*/React.createElement(A.Callout, null, /*#__PURE__*/React.createElement("strong", null, "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0438\u043D\u0441\u0430\u0439\u0442."), " Decagon \u043F\u0440\u043E\u0434\u0430\u0451\u0442 \u043D\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442. \u041E\u043D \u043F\u0440\u043E\u0434\u0430\u0451\u0442 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430. \u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \xAB\u0443 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C AI\xBB. Decagon \u0433\u043E\u0432\u043E\u0440\u0438\u0442: \xAB\u041C\u044B \u0437\u0430\u043C\u0435\u043D\u0438\u043C \u0447\u0430\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0438 \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043C \u0432\u0430\u043C \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u044B\xBB."), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "scout-scores"
  }, /*#__PURE__*/React.createElement(A.Stat, {
    label: "\u041A\u0430\u043A \u0431\u0438\u0437\u043D\u0435\u0441",
    value: "9,5",
    suffix: "/10"
  }), /*#__PURE__*/React.createElement(A.Stat, {
    label: "\u0414\u043B\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044F \u0432 \u0420\u043E\u0441\u0441\u0438\u0438",
    value: "8",
    suffix: "/10"
  }), /*#__PURE__*/React.createElement(A.Stat, {
    label: "\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044E",
    value: "9",
    suffix: "/10"
  }))));
}
window.ScoutArticle = ScoutArticle;
window.ScoutTOC = TOC;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scout/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/scout/parts.jsx
try { (() => {
/* Scout UI kit — shared parts (loading splash, header, TOC, footer, and the
 * two interactive widgets: ROI calculator and the growth/step pickers).
 * All exported to window for index.html to compose. Components pulled from
 * the compiled bundle namespace. */

const S = window.ScoutDesignSystem_235301;

/* ---------------- Loading splash ("Unpacking") ---------------- */
function Loading({
  done
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scout-loading" + (done ? " is-done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-loading__mark"
  }, /*#__PURE__*/React.createElement(S.ScoutMark, {
    size: 64
  })), /*#__PURE__*/React.createElement("div", {
    className: "scout-loading__bar"
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "scout-loading__cap"
  }, "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432"));
}

/* ---------------- Top bar ---------------- */
function Header() {
  const nav = ['Разбор', 'Экономика', 'Россия'];
  return /*#__PURE__*/React.createElement("header", {
    className: "scout-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "scout-header__brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement(S.ScoutMark, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    className: "scout-header__nav"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    className: "scout-header__link"
  }, n)), /*#__PURE__*/React.createElement(S.Button, {
    size: "sm"
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))));
}

/* ---------------- Table of contents ---------------- */
function Toc({
  items,
  active,
  onJump
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "scout-toc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-eyebrow scout-toc__title"
  }, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("nav", {
    className: "scout-toc__nav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: "#" + it.id,
    onClick: e => {
      e.preventDefault();
      onJump(it.id);
    },
    className: "scout-toc__item" + (active === it.id ? " is-active" : "")
  }, it.label))));
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [{
    h: 'Разделы',
    items: ['Разбор', 'Экономика', 'Россия', 'Архив']
  }, {
    h: 'Проект',
    items: ['О Scout', 'Авторы', 'Метод оценки', 'Контакты']
  }, {
    h: 'Связь',
    items: ['Telegram', 'Почта', 'RSS']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "scout-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-footer__brand"
  }, /*#__PURE__*/React.createElement(S.ScoutMark, {
    size: 30,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("p", {
    className: "scout-footer__tag"
  }, "\u0420\u0430\u0437\u0431\u043E\u0440\u044B \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432: \u043A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D \u0431\u0438\u0437\u043D\u0435\u0441 \u0438 \u043C\u043E\u0436\u043D\u043E \u043B\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u0420\u043E\u0441\u0441\u0438\u0438."), /*#__PURE__*/React.createElement(S.Button, {
    variant: "gold",
    size: "sm"
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0430\u0437\u0431\u043E\u0440\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "scout-footer__cols"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    className: "scout-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-footer__h"
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    className: "scout-footer__link"
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    className: "scout-footer__base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Scout"), /*#__PURE__*/React.createElement("span", null, "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430, \u0430 \u043D\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F")));
}

/* ---------------- ROI calculator ---------------- */
function Calculator() {
  const [ops, setOps] = React.useState(100);
  const [salary, setSalary] = React.useState(4000);
  const [auto, setAuto] = React.useState(70);
  const rub = n => '$' + n.toLocaleString('ru-RU').replace(/,/g, ' ');
  const yearCost = ops * salary * 12;
  const saved = Math.round(yearCost * (auto / 100) * 0.7);
  const decagon = 100000;
  return /*#__PURE__*/React.createElement("div", {
    className: "scout-calc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-calc__controls"
  }, /*#__PURE__*/React.createElement(S.Slider, {
    label: "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438",
    min: 0,
    max: 200,
    value: ops,
    onChange: setOps,
    format: v => v
  }), /*#__PURE__*/React.createElement(S.Slider, {
    label: "\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430 \u0432 \u043C\u0435\u0441\u044F\u0446",
    min: 1000,
    max: 10000,
    step: 500,
    value: salary,
    onChange: setSalary,
    format: rub
  }), /*#__PURE__*/React.createElement(S.Slider, {
    label: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0439",
    min: 0,
    max: 100,
    value: auto,
    onChange: setAuto,
    format: v => v + '%'
  })), /*#__PURE__*/React.createElement("div", {
    className: "scout-calc__out"
  }, /*#__PURE__*/React.createElement(S.SpecRow, {
    label: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0432 \u0433\u043E\u0434"
  }, rub(yearCost)), /*#__PURE__*/React.createElement(S.SpecRow, {
    label: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0437\u0430 \u0441\u0447\u0451\u0442 AI"
  }, rub(saved)), /*#__PURE__*/React.createElement(S.SpecRow, {
    label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C Decagon"
  }, rub(decagon))));
}

/* ---------------- Growth year picker ---------------- */
function GrowthPicker() {
  const data = {
    '2023': {
      h: 'Основание',
      t: 'Запуск компании и первые инвестиции от ведущих венчурных фондов.'
    },
    '2024': {
      h: 'Рост',
      t: 'Быстрое расширение клиентской базы и новые раунды финансирования.'
    },
    '2025': {
      h: 'Оценка $10 млрд+',
      t: 'Компания входит в число самых дорогих AI-стартапов сегмента.'
    }
  };
  const [y, setY] = React.useState('2023');
  const d = data[y];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S.SegmentedControl, {
    options: Object.keys(data),
    value: y,
    onChange: setY
  }), /*#__PURE__*/React.createElement("div", {
    className: "scout-year"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-year__num"
  }, y), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "scout-year__h"
  }, d.h), /*#__PURE__*/React.createElement("p", {
    className: "scout-year__t"
  }, d.t))));
}

/* ---------------- Step flow picker ---------------- */
function StepFlow() {
  const steps = [{
    h: 'Обращение',
    t: 'Клиент пишет в поддержку через сайт, приложение, почту или мессенджер.'
  }, {
    h: 'Понимание',
    t: 'AI определяет намерение и находит нужные данные во внутренних системах.'
  }, {
    h: 'Действие',
    t: 'Проверяет заказ, статус доставки, подписку — выполняет реальную операцию.'
  }, {
    h: 'Ответ',
    t: 'Формирует понятный ответ и отправляет его клиенту.'
  }, {
    h: 'Эскалация',
    t: 'Нестандартный вопрос передаётся живому сотруднику с контекстом.'
  }, {
    h: 'Обучение',
    t: 'Диалог пополняет базу знаний и улучшает будущие ответы.'
  }];
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S.SegmentedControl, {
    options: steps.map((_, n) => n + 1),
    size: "sm",
    value: i + 1,
    onChange: v => setI(v - 1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "scout-year"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scout-year__num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "scout-year__h"
  }, steps[i].h), /*#__PURE__*/React.createElement("p", {
    className: "scout-year__t"
  }, steps[i].t))));
}
Object.assign(window, {
  Loading,
  Header,
  Toc,
  Footer,
  Calculator,
  GrowthPicker,
  StepFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/scout/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ScoutMark = __ds_scope.ScoutMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SpecRow = __ds_scope.SpecRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Stat = __ds_scope.Stat;

})();
