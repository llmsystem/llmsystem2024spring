--- 
hide_table_of_contents: true
---

## Description

Students will collaborate in groups of **2 to 3** to complete a research project on LLM systems. The group project's purpose is to inspire students to design scalable components in MiniTorch for LLM, reimplement recent papers or to delve deeply into advanced LLM Systems research areas.

We present a seed list of project ideas. You are welcome to choose any of the above topics, but we strongly encourage you to come up with something that inspires and excites you in this broad field.

## Suggested Topics for Projects

**Reimplement recent high-quality papers**
- Some recent paper
    - Direct Preference Optimization: Your Language Model is Secretly a Reward Model

**Extend scalable components in MiniTorch**
- Implement FlashAttention
- Implement PageAttention
- Implement mix-precision training
- Implement memory optimization in [LightSeq](https://arxiv.org/abs/2010.13887) for faster inference

**Advanced research direction**
- Scaling multimodal LLM training and inference (e.g. speech-text LLM model)
    - the input can be long sequence due to a great number of pixels or number of frames in a speech utterance
    - the output can also be long
- Federated training for large models [ [link](https://openreview.net/forum?id=Kg0IDQF3wp&noteId=v5OYKJ2sra) ]
- additional training (e.g., quantized training/finetuning under fp16/int8) for better quantization performance afterwards
- Special model/system design for biology / chemistry-related models (small vocab_size ~10, but long sequence e.g., 20K)
- Accelerating large model inference in a browser with limited resource (e.g. how to make WebLLM 10x faster on a 16GB mem laptop?)
- Scaling and accelerating the training for MOE Models
- Deduplicating Training Data Makes Language Models Better → Near-Duplicate [ [link](https://arxiv.org/pdf/2107.06499.pdf) ]
- Jointly train retrieval embeddings and LLM modules