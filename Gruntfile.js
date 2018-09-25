module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-run');
  grunt.initConfig({
    run: {
      webpack: {
        cmd: 'npm',
        args: [
          'run',
          'webpack',
        ],
      },
      s3ReviewsGzip: {
        cmd: 'aws',
        args: [
          's3',
          'cp',
          './client/dist/bundle.js.gz',
          's3://zagatrecommendations/bundle.js',
          '--grants',
          'read=uri=http://acs.amazonaws.com/groups/global/AllUsers',
        ],
      },
    },
  });
  grunt.registerTask('build', ['run:webpack']);
  grunt.registerTask('build-deploy', ['run:webpack', 'run:s3ReviewsGzip']);
};
