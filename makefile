createnew:
	ng new ${name} --no-strict --no-standalone

testrun: 
	cd my-first-app && ng serve

createcomponent:
	cd my-first-app && ng generate component ${name} --skip-tests

createSC:
	cd my-first-app && ng g c ${name} --skip-tests