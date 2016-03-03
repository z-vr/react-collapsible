import React from 'react';
import Collapsable from './../../../build/Collapsable';


var App = React.createClass({


  render: function() {
    return(
      <div>

        <Collapsable triggerText="Start here">
          <p>This is the collapsable content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsable component. Check out the next section!</p>
        </Collapsable>

        <Collapsable transitionTime={500} triggerText="Then try this one">
          <p>Would you look at that!</p>
          <p>See; you can nest as many Collapsable components as you like.</p>

          <Collapsable triggerText="Mmmmm, it's all cosy nested here">
            <p>And there's no limit to how many levels deep you go. Or how many you have on the same level.</p>

            <Collapsable triggerText="This is just another Collapsable">
              <p>It just keeps going and going! Well, actually we've stopped here. But that's only because I'm running out of things to type.</p>
            </Collapsable>
            <Collapsable triggerText="But this one is open by default!" startOpen={true}>
              <p>And would you look at that! This one is open by default. Sexy huh!?</p>
              <p>You can pass the prop of startOpen=&#123;true&#125; which will make the Collapsable open by default.</p>
            </Collapsable>
            <Collapsable triggerText="That's not all. Check out the speed of this one" transitionTime={100}>
              <p>Whoosh! That was fast right?</p>
              <p>You can control the time it takes to animate (transition) by passing the prop transitionTime a value in milliseconds. This one was set to transitionTime=&#123;100&#125;</p>
            </Collapsable>

          </Collapsable>
        </Collapsable>

        <Collapsable transitionTime={400} triggerText="This one will blow your mind." easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}>
          <p>Well maybe not. But did you see that little wiggle at the end. That is using a CSS cubic-beizer for the easing!</p>
          <p>You can pass any string into the prop easing that you would declare in a CSS transition-timing-function. This means you have complete control over how that Collapsble appears.</p>
        </Collapsable>

        <Collapsable transitionTime={500} triggerText="Oh and did I mention that I'm responsive?">
          <p>That's correct. This collapsable section will animate to the height it needs to and then set it's height back to auto.</p>
          <p>This means that no matter what width you stretch that viewport to, the Collapsble it will respond to it.</p>
          <p>And no matter what height the content within it is, it will change height too.</p>
          <h2>CSS Styles</h2>
          <p>All of the style of the Collapsable (apart from the overflow and transition) are controlled by your own CSS too.</p>
          <p>By default the top-level CSS class is Collapsble, but you have control over this too so you can easily add it into your own project. Neato!</p>
          <p>So by setting the prop of classParentString=&#123;"MyNamespacedClass"&#125; then the top-level class will become MyNamespacedClass.</p>
      </Collapsable>

      </div>
    );
  }

});

export default App;
