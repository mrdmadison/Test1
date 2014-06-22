function LikeData(id, likeCnt, dislikeCnt, likeInd)
{
    this.id         = id;
    this.likeCnt    = likeCnt;
    this.dislikeCnt = dislikeCnt;
    this.likeInd    = likeInd;   // 0 - neither like or dislike (implies userName is null)
                                 // 1 - userName "likes"
                                 // 2 - userName "dislikes"
}

LikeData.prototype.like = function() {
    if (this.likeInd == 0) {
        this.likeCnt = this.likeCnt + 1;
    }
    else if (this.likeInd == 1) {
        return;   // Already liked, so do nothing
    }
    else {        // Previously disliked
        this.dislikeCnt = this.dislikeCnt - 1;
        this.likeCnt    = this.likeCnt + 1;
    }
    
    this.likeInd = 1;
};

LikeData.prototype.dislike = function() {
    if (this.likeInd == 0) {
        this.dislikeCnt = this.dislikeCnt + 1;
    }
    else if (this.likeInd == 1) {
        this.likeCnt    = this.likeCnt - 1;
        this.dislikeCnt = this.dislikeCnt + 1;
    }
    else {
        return;   // Already disliked, so do nothing
    }
    
    this.likeInd = 2;
};

LikeData.prototype.removeDesignation = function() {
    if (this.likeInd == 0) {
        return;   // No designation exists, so do nothing
    }
    else if (this.likeInd == 1) {
        this.likeCnt    = this.likeCnt - 1;    
    }
    else {        // Previously disliked
        this.dislikeCnt = this.dislikeCnt - 1;
    }
    
    this.likeInd = 0;
};