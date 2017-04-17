import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {})
 
router.get('/contests', (request, response) => {
  response.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (request, response) => {
  let contest = contests[request.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus augue a massa euismod, ac efficitur urna pulvinar. Integer pretium tempus viverra. Proin nec urna sit amet est facilisis tristique et hendrerit odio. Nam ut neque sagittis, laoreet ante id, tincidunt mi. Nunc vel orci nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas scelerisque sem ac bibendum volutpat. Maecenas tincidunt sagittis malesuada. Suspendisse ullamcorper massa sed ante sodales faucibus. Duis et urna mollis, elementum quam a, pulvinar lacus.'
  response.send(contest);
});

export default router;
