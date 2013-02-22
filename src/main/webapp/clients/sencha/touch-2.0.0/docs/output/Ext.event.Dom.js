Ext.data.JsonP.Ext_event_Dom({"code_type":"ext_define","meta":{"private":true},"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.event.Touch' rel='Ext.event.Touch' class='docClass'>Ext.event.Touch</a></div><h4>Files</h4><div class='dependency'><a href='source/Dom.html#Ext-event-Dom' target='_blank'>Dom.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>DOM event. This class really extends <a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a>, but for documentation\npurposes it's members are listed inside <a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-distance' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-property-distance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-property-distance' class='name expandable'>distance</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The distance of the event. ...</div><div class='long'><p>The distance of the event.</p>\n\n<p><strong>This is only available when the event type is <code>swipe</code> and <code>pinch</code></strong></p>\n</div></div></div><div id='property-pageX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-property-pageX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-property-pageX' class='name not-expandable'>pageX</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The browsers x coordinate of the event.</p>\n</div><div class='long'><p>The browsers x coordinate of the event.</p>\n</div></div></div><div id='property-pageY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-property-pageY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-property-pageY' class='name not-expandable'>pageY</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The browsers y coordinate of the event.</p>\n</div><div class='long'><p>The browsers y coordinate of the event.</p>\n</div></div></div><div id='property-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-property-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-property-target' class='name expandable'>target</a><span> : HTMLElement</span></div><div class='description'><div class='short'>The target HTMLElement for this event. ...</div><div class='long'><p>The target HTMLElement for this event. For example; if you are listening to a tap event and you tap on a <code>&lt;div&gt;</code> element,\nthis will return that <code>&lt;div&gt;</code> element.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getPageX' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-method-getPageX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-method-getPageX' class='name expandable'>getPageX</a>( <span class='pre'></span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Gets the x coordinate of the event. ...</div><div class='long'><p>Gets the x coordinate of the event.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0</p>\n        <p>Please use <a href=\"#!/api/Ext.event.Dom-property-pageX\" rel=\"Ext.event.Dom-property-pageX\" class=\"docClass\">pageX</a> property directly.</p>\n\n        </div>\n</div></div></div><div id='method-getPageY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-method-getPageY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-method-getPageY' class='name expandable'>getPageY</a>( <span class='pre'></span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Gets the y coordinate of the event. ...</div><div class='long'><p>Gets the y coordinate of the event.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0</p>\n        <p>Please use <a href=\"#!/api/Ext.event.Dom-property-pageX\" rel=\"Ext.event.Dom-property-pageX\" class=\"docClass\">pageX</a> property directly.</p>\n\n        </div>\n</div></div></div><div id='method-getTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> selector], [<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/Mixed maxDepth], [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> returnEl]</span> ) : HTMLElement</div><div class='description'><div class='short'>Gets the target for the event. ...</div><div class='long'><p>Gets the target for the event. Unlike <a href=\"#!/api/Ext.event.Dom-property-target\" rel=\"Ext.event.Dom-property-target\" class=\"docClass\">target</a>, this returns the main element for your event. So if you are\nlistening to a tap event on Ext.Viewport.element, and you tap on an inner element of Ext.Viewport.element, this will\nreturn Ext.Viewport.element.</p>\n\n<p>If you want the element you tapped on, then use <a href=\"#!/api/Ext.event.Dom-property-target\" rel=\"Ext.event.Dom-property-target\" class=\"docClass\">target</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>A simple selector to filter the target or look for an ancestor of the target</p>\n</div></li><li><span class='pre'>maxDepth</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/Mixed (optional)<div class='sub-desc'><p>The max depth to</p>\n\n<pre><code> search as a number or element (defaults to 10 || document.body)\n</code></pre>\n</div></li><li><span class='pre'>returnEl</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>True to return a <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-method-getTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-method-getTime' class='name expandable'>getTime</a>( <span class='pre'></span> ) : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></div><div class='description'><div class='short'>Returns the time of the event. ...</div><div class='long'><p>Returns the time of the event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-method-getXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-method-getXY' class='name expandable'>getXY</a>( <span class='pre'></span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Gets the X and Y coordinates of the event. ...</div><div class='long'><p>Gets the X and Y coordinates of the event.</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> since 2.0</p>\n        <p>Please use the <a href=\"#!/api/Ext.event.Dom-property-pageX\" rel=\"Ext.event.Dom-property-pageX\" class=\"docClass\">pageX</a> and <a href=\"#!/api/Ext.event.Dom-property-pageY\" rel=\"Ext.event.Dom-property-pageY\" class=\"docClass\">pageY</a> properties directly.</p>\n\n        </div>\n</div></div></div><div id='method-preventDefault' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Dom'>Ext.event.Dom</span><br/><a href='source/Dom.html#Ext-event-Dom-method-preventDefault' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Dom-method-preventDefault' class='name expandable'>preventDefault</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Prevents the browsers default handling of the event. ...</div><div class='long'><p>Prevents the browsers default handling of the event.</p>\n</div></div></div></div></div></div></div>","component":false,"aliases":{},"tagname":"class","extends":null,"inheritdoc":null,"mixedInto":[],"alternateClassNames":[],"requires":[],"inheritable":false,"superclasses":[],"html_meta":{"private":null},"singleton":false,"parentMixins":[],"members":{"css_mixin":[],"event":[],"method":[{"meta":{"deprecated":{"version":"2.0","text":"Please use {@link #pageX} property directly."}},"owner":"Ext.event.Dom","tagname":"method","name":"getPageX","id":"method-getPageX"},{"meta":{"deprecated":{"version":"2.0","text":"Please use {@link #pageX} property directly."}},"owner":"Ext.event.Dom","tagname":"method","name":"getPageY","id":"method-getPageY"},{"meta":{},"owner":"Ext.event.Dom","tagname":"method","name":"getTarget","id":"method-getTarget"},{"meta":{},"owner":"Ext.event.Dom","tagname":"method","name":"getTime","id":"method-getTime"},{"meta":{"deprecated":{"version":"2.0","text":"Please use the {@link #pageX} and {@link #pageY} properties directly."}},"owner":"Ext.event.Dom","tagname":"method","name":"getXY","id":"method-getXY"},{"meta":{},"owner":"Ext.event.Dom","tagname":"method","name":"preventDefault","id":"method-preventDefault"}],"cfg":[],"property":[{"meta":{},"owner":"Ext.event.Dom","tagname":"property","name":"distance","id":"property-distance"},{"meta":{},"owner":"Ext.event.Dom","tagname":"property","name":"pageX","id":"property-pageX"},{"meta":{},"owner":"Ext.event.Dom","tagname":"property","name":"pageY","id":"property-pageY"},{"meta":{},"owner":"Ext.event.Dom","tagname":"property","name":"target","id":"property-target"}],"css_var":[]},"subclasses":["Ext.event.Touch"],"private":true,"statics":{"css_mixin":[],"event":[],"cfg":[],"method":[],"property":[],"css_var":[]},"name":"Ext.event.Dom","uses":[],"mixins":[],"id":"class-Ext.event.Dom","files":[{"href":"Dom.html#Ext-event-Dom","filename":"Dom.js"}]});