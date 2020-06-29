import React from 'react';

import timeline from '../styles/timeline.module.css';

const TimeLine = () => (
	<div className="container p-4">
		<ol class={timeline.timeline}>
			<li>
				<div class={timeline.directionl}>
					<div class={timeline.flagwrapper}>
						<span class={timeline.flag}>Central Modern School</span>
						<span class={timeline.timewrapper}>
							<span class={timeline.time}>2007 - 2015</span>
						</span>
					</div>
					<div class={timeline.desc}>
						Did my Primary and High School.
					</div>
				</div>
			</li>

			<li>
				<div class={timeline.directionr}>
					<div class={timeline.flagwrapper}>
						<span class={timeline.flag}>
							Sudhir Memorial Institute
						</span>
						<span class={timeline.timewrapper}>
							<span class={timeline.time}>2015 - 2016</span>
						</span>
					</div>
					<div class={timeline.desc}>
						Studied Science Stream in Senior High School
					</div>
				</div>
			</li>

			<li>
				<div class={timeline.directionl}>
					<div class={timeline.flagwrapper}>
						<span class={timeline.flag}>Brainware University</span>
						<span class={timeline.timewrapper}>
							<span class={timeline.time}>2017 - present</span>
						</span>
					</div>
					<div class={timeline.desc}>
						Pursuing a Bachelor's degree (Computer Application)
					</div>
				</div>
			</li>
		</ol>
	</div>
);

export default TimeLine;
