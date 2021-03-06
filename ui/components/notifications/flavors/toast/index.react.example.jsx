/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

exports.preview = (
<div className='demo-only demo-only--notification'>

  <div className={pf('notify-container')}>
    <div className={pf('notify notify--toast')} role="alert">
      <span className={pf('assistive-text')}>Info</span>
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="large"
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <div className={pf('notify__content')}>
        <h2 className={pf('text-heading--small')}>Base Toast</h2>
      </div>
    </div>
  </div>

  <div className={pf('notify-container')}>
    <div className={pf('notify notify--toast theme--success')} role="alert">
      <span className={pf('assistive-text')}>Success</span>
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="large"
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <div className={pf('notify__content grid')}>
        <SvgIcon className={pf('icon icon--small m-right--small col no-flex')} sprite="utility" symbol="notification" />
        <div className={pf('col align-middle')}>
          <h2 className={pf('text-heading--small ')}>Your new contact <a href="#">Sara Smith</a> was successfully created.</h2>
        </div>
      </div>
    </div>
  </div>
  <div className={pf('notify-container')}>
    <div className={pf('notify notify--toast theme--warning')} role="alert">
      <span className={pf('assistive-text')}>Warning</span>
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="large"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <div className={pf('notify__content')}>
        <h2 className={pf('text-heading--small')}>Oops, you've missed some required form inputs.</h2>
      </div>
    </div>
  </div>
  <div className={pf('notify-container')}>
    <div className={pf('notify notify--toast theme--error')} role="alert">
      <span className={pf('assistive-text')}>Error</span>
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="large"
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <div className={pf('notify__content grid')}>
        <SvgIcon className={pf('icon icon--small m-right--small col no-flex')} sprite="utility" symbol="warning" />
        <div className={pf('col align-middle')}>
          <h2 className={pf('text-heading--small')}>You've encountered some errors when trying to save edits to Samuel Smith.</h2>
        </div>
      </div>
    </div>
  </div>
  <div className={pf('notify-container')}>
    <div className={pf('notify notify--toast')} role="alert">
      <span className={pf('assistive-text')}>Error</span>
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="large"
        flavor="icon-inverse"
        sprite="utility"
        symbol="close"
        assistiveText="Close" />
      <div className={pf('notify__content grid')}>
        <SvgIcon className={pf('icon icon--small m-right--small col no-flex')} sprite="utility" symbol="warning" />
        <div className={pf('col align-middle')}>
          <h2 className={pf('text-heading--small')}>You've encountered some errors when trying to save edits to Samuel Smith.</h2>
          <p>Here's some detail of what happened, being very descriptive and transparent :P.</p>
        </div>
      </div>
    </div>
  </div>
</div>
);

exports.code = (
  <div className={pf('notify-container')}>
    <div className={pf('notify notify--toast')} role="alert">
      <span className={pf('assistive-text')}>Info</span>
      <ButtonIcon
        className={pf('notify__close')}
        iconFlavor="inverse"
        sprite="action"
        symbol="close"
        assistiveText="Close" />
      <div className={pf('notify__content')}>
        <h2 className={pf('text-heading--small')}>Base Toast</h2>
      </div>
    </div>
  </div>
);
