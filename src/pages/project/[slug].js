import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../layout/Layout'
import { projectsData } from '../../constants/constants';

const ProjectDetails = () => {
    const { query } = useRouter();
    const { slug } = query;
    const project = projectsData.find(x => x.slug === slug)
    console.log(project);
    if (!project) {
      return <div>No Project Available</div>
    }
    
  return (
    <Layout title={project?.title}>
        <h1>{project?.title}</h1>
    </Layout>
  )
}

export default ProjectDetails