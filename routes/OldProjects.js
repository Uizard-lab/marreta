const router = require("express").Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    return res.json(projects);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.post("/", async (req, res) => {
  var project = new Project({
    title: req.body.title,
    publisher: {
      name: req.body.publisher.name,
      email: req.body.publisher.email,
      phone: req.body.publisher.phone,
    },
    resume: req.body.resume,
    areaOfIntervention: req.body.areaOfIntervention,
    audience: req.body.audience,
    objectives: req.body.objectives,
    activityDescription: req.body.activityDescription,
    specificFormationRequired: req.body.specificFormationRequired,
    schedule: req.body.schedule,
    specialArea: req.body.specialArea,
    entitiesInvolved: req.body.entitiesInvolved,
    specialNotes: req.body.specialNotes,
    rgpd: req.body.rgpd
  });
  try {
    const savedProject = await project.save();
    console.log("posting was success");
    return res.json(savedProject);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    return res.json(project);
  } catch (err) {
    console.log(err);
    return res.status(400).json("Error: " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedProject = await Project.findByIdAndDelete(req.params.id);
    return res.json(removedProject);
  } catch (err) {
    console.log(err);
    return res.status(400).json("Error: " + err);
  }
});

router.patch("/patch/:id", async (req, res) => {
  try {
    const project = await Project.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          publisher: {
            name: req.body.publisher.name,
            email: req.body.publisher.email,
            phone: req.body.publisher.phone,
          },
          resume: req.body.resume,
          areaOfIntervention: req.body.areaOfIntervention,
          audience: req.body.audience,
          objectives: req.body.objectives,
          activityDescription: req.body.activityDescription,
          specificFormationRequired: req.body.specificFormationRequired,
          schedule: req.body.schedule,
          specialArea: req.body.specialArea,
          entitiesInvolved: req.body.entitiesInvolved,
          specialNotes: req.body.specialNotes,
          rgpd: req.body.rgpd
        },
      }
    );
    console.log("I was called");
    return res.json(project);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

module.exports = router;
