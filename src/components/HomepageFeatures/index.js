import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="col">
            <div className={clsx('col')}>
                <div className="text--left"></div>
                <div className="text--left --md">
                    <Heading as="h1">{'Course Description'}</Heading>
                    <p> Recent progress of Artificial Intelligence has been largely
                        driven by advances in large language models (LLMs) and other
                        generative methods. These models are often very large (e.g. 175
                        billion parameters for GPT3) and requires increasingly larger data
                        to train (e.g. 300 billion tokens for ChatGPT). Training, serving,
                        fine-tuning, and evaluating LLMs require sophisticated engineering
                        with modern hardware and software stacks. Developing scalable
                        systems for large language models is critical to advance AI.</p>
                        <p>In this course, students will learn the essential skills to
                        design and implement LLM systems. This includes algorithms and
                        system techniques to efficiently train LLMs with huge data,
                        efficient embedding storage and retrieval, data efficient
                        fine-tuning, communication efficient algorithms, efficient
                        implementation of reinforcement learning with human feedback,
                        acceleration on GPU and other hardware, model compression for
                        deployment, and online maintenance. We will cover the latest
                        advances about LLM systems in machine learning, natural language
                        processing, and system research.</p>
                </div>
            </div>

            <div className={clsx('col')}>
                <div className="text--left"></div>
                <div className="text--left --md">
                    <Heading as="h1">{'Instructor'} </Heading>
                    <Heading as="h3"><a href="https://www.cs.cmu.edu/~leili/">Lei Li</a></Heading>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
