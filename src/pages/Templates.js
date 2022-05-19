import React from "react";
import "../styles/index.css";

function Templates() {
  return (
    <>
      <div className="template">
        <h1>Templates</h1>
        <p>
          Templates are pure HTML and allow string interpolation and enhancement
          via data-* attributes.
        </p>
        <h3>String Interpolation</h3>
        <p>
          You can interpolate data in template using the "variable_name"
          notation. It can access fields from component or global data. All
          global data made available to the templates will start with a ‘@’ sign
        </p>
        <p>
          Note that string interpolation is done before the component is created
          and it does not update afterwards if/when the data changes.
        </p>
        <h3>data-name</h3>
        <p>
          Stores a jQuery object wrapping the element in the created component
          using this key, prefixed by "$". $root is always stored, so "root"
          should not be used as value of data-name
        </p>
        <h3>data-val</h3>
        <p>Sets the val attribute of the DOM element using interpolation.</p>
        <h3>data-src</h3>
        <p>Sets the src attribute of the DOM element using interpolation</p>
        <h3>data-href</h3>
        <p>
          Used for internal links of the SPA. SetJS will create the href
          attribute and prevent reloading of the application. On click, the new
          page will be opened
        </p>
        <h3>data-bind & data-watch</h3>
        <p>
          Used to provide a simple way to dynamically control the UI (including
          content rendering). data-watch is used on existing properties and runs
          the binding automatically when the field is changed. It uses
          Object.defineProperty() to start observing changes. data-watch should
          be used only where it makes absolute sense to automatically update UI
          based on data changes. Most of the times you should use data-bind.
          SetJS does not encourage gloabl use of this behavior as common in
          other frameworks.
        </p>
        <p>
          Let’s suppose you pass the following data to a component (2nd argument
          to the getComp call):
        </p>
        <p>
          The data-bind string uses a very simple mini-language. A few
          characters i.e. ;, :, |, ,, ` and ~ have special meaning as given
          below:
        </p>
        <h3>Colon ( : )</h3>
        <p>
          The first part of each statement is a value. If you want more than 1
          binding making use of the same value, you can separate them using the
          : character. E.g:
        </p>
        <p>
          Two jQuery functions i.e. text and addClass are called and the value
          of type is passed to each as a parameter.
        </p>
        <h3>Pipe ( | )</h3>
        <p>
          You can create a series of function calls to work on a value using the
          | character. E.g:
        </p>
        <p>
          The value of person.type is first passed to a function isAdmin
          (defined in the component data or as a global function) and the result
          is then passed to another jQuery function, toggle
        </p>
        <h3>Comma ( , )</h3>
        <p>
          You can pass parameters to the functions using comma as a separator.
          E.g:
        </p>
        <h3>Semicolon ( ; )</h3>
        <p>
          Separates statements. A data-bind command consists of one or more
          statements. In most cases, you’ll be using a single statement and will
          not use the ; character. If you need more than 1 statement in a
          data-bind attribute, you’ll use semicolon to separate your statements.
          Each statement in turn will consist of one value and one or more
          bindings making use of that value.
        </p>
        <h3>Prime ( ` )</h3>
        <p>
          If you want the provided value to be parsed as a literal string, you
          can enclose it with ` characters. That way you can use special
          characters in it. Also, the value passed will not be interpreted as a
          variable path.
        </p>
        <h3>Tilde ( ~ )</h3>
        <p>
          Prefix a property path with ~ so that it is evaluated each time the
          binding is performed i.e. initially as well as when you call the
          component’s update method.
        </p>
        <h3>data-func & data-arg</h3>
        <p>Used by data-act, detailed next</p>
        <h3>data-act:</h3>
        <p>
          Used to bind events. Can be accompanied by data-func to specify the
          name of the function that is to be called when the event is raised. If
          data-func is not provided, SetJS will try to call a function with the
          same name as the event. A few abbreviations are provided by default:
        </p>
        <ul>
          <li>down = mousedown touchstart</li>
          <li>up = mouseup touchend</li>
          <li>out = mouseleave touchleave touchcancel</li>
          <li>move = mousemove touchmove</li>
          <li>form = submit *</li>
        </ul>
        <p>
          * form enables special handling of the "submit" event via the
          handleEvent function of your application in
          src/scripts/core/setjs-init.js.
        </p>
        <h3>data-if, data-elif and data-else</h3>
        <p>
          One time conditional rendering of content. Only evaluated when the
          component is created. The respective DOM element is either kept or
          removed based on the result. The first two (data-if, data-elif) expect
          similar syntax as data-bind. The statement separator (the semicolon)
          works as AND and the binding separator (the colon) works as OR. It is
          recommended to not let these conditions become too complex for better
          readability. If a complex condition is needed, you can move it to the
          code as function call and call that function from these attributes.
          Remember that setjs tries to keep templates simple. Any complex logic
          should be handled in code.
        </p>
        <h3>data-list and data-slot</h3>
        <p>
          data-list allows creation of lists. data-slot allows reuse of a
          template within other templates. Both accept a JSON string with the
          following keys:
        </p>
        <h3>prop</h3>
        <p>
          (Optional if func (below) is provided). Name/Key of the property that
          will be used. Can be a function name that in turn provides the data.
          In the case of data-slot, if neither prop nor func is given, the
          parent data will be used as the data of the child component.
        </p>
        <h3>func</h3>
        <p>
          (Optional) A function to be called after prop gives the data. If prop
          is not given, the root data will be passed to func. Mostly used to
          filter or modify the data before the slot or list are rendered.
        </p>
        <h3>name</h3>
        <p>
          (Optional) If provided, the list object or the slot component created
          by SetJS will be stored in the created component using this key.
        </p>
        <h3>vars</h3>
        <p>
          (Optional) Used to optionally rename keys of values provided to child
          component:
        </p>
        <ul>
          <li>k: Rename default key "key"</li>
          <li>v: Rename default key "val"</li>
          <li>d: Rename default key "dex"</li>
          <li>i: Rename default key "index"</li>
        </ul>
        <h3>subs</h3>
        <p>
          (Optional) A key/value map to be used to replace literal text. The
          values will replace the matching keys.
        </p>
      </div>
    </>
  );
}

export default Templates;
