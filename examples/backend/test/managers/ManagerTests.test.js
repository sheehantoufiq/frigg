// const modules = ['Monday', 'RollWorks', 'Front', 'HubSpot', 'Huggg', 'Personio', 'Terminus', 'Outreach'];
const modules = ['Outreach'];
modules.forEach((module) => {
    require(`../../src/modules/${module}/test/Manager.test.js`);
});