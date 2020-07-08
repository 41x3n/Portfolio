import React from 'react';

import timeline from '../styles/timeline.module.css';

const TimeLine = () => (
	<div className="container p-4">
		<ol className={timeline.timeline}>
			<li>
				<div className={timeline.directionl}>
					<div className={timeline.flagwrapper}>
						<span className={timeline.flag}>
							Central Modern School
						</span>
						<span className={timeline.timewrapper}>
							<span className={timeline.time}>2007 - 2015</span>
						</span>
					</div>
					<div className={timeline.desc}>
						Did my Primary and High School.
					</div>
				</div>
			</li>

			<li>
				<div className={timeline.directionr}>
					<div className={timeline.flagwrapper}>
						<span className={timeline.flag}>
							Sudhir Memorial Institute
						</span>
						<span className={timeline.timewrapper}>
							<span className={timeline.time}>2015 - 2016</span>
						</span>
					</div>
					<div className={timeline.desc}>
						Studied Science Stream in Senior High School
					</div>
				</div>
			</li>

			<li>
				<div className={timeline.directionl}>
					<div className={timeline.flagwrapper}>
						<span className={timeline.flag}>
							Brainware University
						</span>
						<span className={timeline.timewrapper}>
							<span className={timeline.time}>
								2017 - present
							</span>
						</span>
					</div>
					<div className={timeline.desc}>
						Pursuing a Bachelor's degree (Computer Application)
					</div>
				</div>
			</li>
		</ol>
	</div>
);

export default TimeLine;
