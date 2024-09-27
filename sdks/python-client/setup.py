from setuptools import setup

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="agentbase-client",
    version="0.1.12",
    author="AgentBase",
    author_email="hello@agentbase.ai",
    description="A package for interacting with the AgentBase Service-API",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/agent-base/agentbase",
    license='MIT',
    packages=['agentbase_client'],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    install_requires=[
        "requests"
    ],
    keywords='agentbase nlp ai language-processing',
    include_package_data=True,
)
