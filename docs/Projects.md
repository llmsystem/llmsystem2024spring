--- 
hide_table_of_contents: true
---

## Description

Students will collaborate in groups of **2 to 3** to complete a project on LLM systems. These projects should have some systems and some LLM components. 
There are two types of projects: 
- Design scalable and accelerated components in MiniTorch for LLMs by reimplementing a recent LLM system paper. or
- Explore and solve new research challenges on LLM systems with the goal of submitting a paper to a conference (e.g. MLsys, OSDI, SOSP, SC, etc).


## Project Proposal
Please use the latex style file from [here](https://media.mlsys.org/Conferences/MLSYS2024/Styles/mlsys2024style.zip). You proposal should describe: 
- What LLM System problem are you planning to address?
-- what are the system challenges?
- What are the existing state-of-art methods on this problem? Is the source code/model available? 
- Possible directions for going forward. 
- How do you evaluate the performance? what kind of workload?
- Who is your team and how are you planning to split the workload between team members?
- A rough timeline/milestones
- What CPU, GPU and storage infrastructure do need for this project? Please estimate the amount of computation time required.  

## Project Report
- Introduction/Motivation: This essentially lays out the problem definition, motivation, talks about why we need to work on it, the key contributions expected/presented in the work. 
- Related Work/Background: This talks about key papers/works that provide context to your current work. Instead of listing down multiple past works, talk about the ones that minimally differ from your work, and how. 
- Methodology: This section talks about your method, raises research questions and how you are going to address them. 
- Experiments: This section can describe your experiments and the results you obtain. 
- Analysis/Ablations: Typically, you would have multiple factors involved in your experimental setting. Analysis sections help you probe deeper into the results and help piece out contributions from individual modeling decisions made. 
- Conclusion/Discussion: This would list the main takeaways from your work, discuss some future ideas (if any) and engage in discussion. 
- Limitations: This section lays out some known limitations of your work. 
- [final report only] Team Member Contributions List out each individual's contributions in this section.


## Suggested Topics for Projects

We provide a seed list of project ideas. 
You are welcome to choose any of the below topics but not restrict to these.  
We strongly encourage you to come up with something that is challenging and excites you regarding LLM systems.

**Extend scalable components in MiniTorch**
- Implement FlashAttention
- Implement PageAttention
- Implement mix-precision training
- Implement memory optimization in [LightSeq](https://arxiv.org/abs/2010.13887) for faster inference
- Implement DPO training (Direct Preference Optimization)

**Open Research Ideas**
- Scaling multimodal LLM training and inference (e.g. speech-text LLM model)
    - the input can be long sequence due to a great number of pixels or number of frames in a speech utterance
    - the output can also be long
- Federated training for large models [ [link](https://openreview.net/forum?id=Kg0IDQF3wp&noteId=v5OYKJ2sra) ]
- Additional training (e.g., quantized training/finetuning under fp16/int8) for better quantization performance afterwards
- Special model/system design for biology / chemistry-related models (small vocab_size ~10, but long sequence e.g., 10million)
- Accelerating large model inference in a browser with limited resource (e.g. how to make WebLLM 10x faster on a 16GB mem laptop?)
- Scaling and accelerating the training for MOE Models
- Training with heterogenous hardware
- Scalable system to jointly train retrieval embeddings and LLM modules